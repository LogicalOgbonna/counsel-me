const express = require("express");
const router = express.Router();
const passport = require("passport");

const Specialization = require("../../model/Specialization");

router.post("/", (req, res) => {
  new Specialization(req.body)
    .save()
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
