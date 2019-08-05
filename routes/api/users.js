var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const keys = require("../config/");
const passport = require("passport");
const gravatar = require("gravatar");

// Load User model
const User = require("../../model/User");

//Load Question Model

//Validation
const validateUserInput = require("../../validation");

// @route   POST api/users/register
// @desc    Register user
// @access  Public

router.post("/register", (req, res) => {
  const { errors, isValid } = validateUserInput.register(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ regNo: req.body.regNo }).then(user => {
    if (user) {
      errors.regNo = "User with " + req.body.regNo + " already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.regNo, {
        s: "200", // Size
        r: "pg", // Rating
        d: "mm" // Default
      });
      const admin = req.body.admin ? req.body.admin : false;
      const newUser = new User({
        regNo: req.body.regNo,
        avatar,
        password: req.body.password,
        admin
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = {
                id: user.id,
                regNo: user.regNo,
                avatar: user.avatar,
                admin
              };
              jwt.sign(payload, process.env.secretOrKey, (err, token) => {
                res.json({
                  success: "User created sucessfully",
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateUserInput.login(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const regNo = req.body.regNo;
  const password = req.body.password;

  // Find user by regNo
  User.findOne({ regNo }).then(user => {
    // Check for user
    if (!user) {
      errors.regNo = "Registratio nnumber or password not correct";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          id: user.id,
          regNo: user.regNo,
          avatar: user.avatar,
          admin: user.admin
        }; // Create JWT Payload

        // Sign Token
        jwt.sign(payload, process.env.secretOrKey, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Registration number or password not correct";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      regNo: req.user.regNo,
      avatar: req.user.avatar
    });
  }
);

router.get("/all", (req, res) => {
  User.find({}).then(user => res.json(user));
});

module.exports = router;
