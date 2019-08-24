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

router.get("/", (req, res) => {
  res.json([
    {
      name: "Artificial Intelligence",
      courses: [
        { code: "COS415", name: "System Modeling and Simulation" },
        { code: "COS453", name: "Computer process control" },
        { code: "COS412", name: "Computer Performance Evaluation" },
        { code: "COS454", name: "Artificial Intelligence" },
        { code: "COS458", name: "Expert System" }
      ]
    },
    {
      name: "Software theory",
      courses: [
        { code: "COS104", name: "Computing practice" },
        { code: "COS201", name: "Computer Programming" },
        { code: "COS251", name: "Assembly language programming" },
        { code: "COS202", name: "	Computer Programming II" },
        { code: "COS461", name: "Organization Of Programing Language" },
        { code: "COS462", name: "Structured programming" },
        { code: "COS414", name: "Operation Research II" },
        { code: "COS464", name: "Concurrent Programming" }
      ]
    },
    {
      name: "System Engineering",
      courses: [
        { code: "COS301", name: "Introduction To Digital Design" },
        { code: "COS303", name: "	Introduction To Microcomputer" },
        { code: "COS341", name: "Computer Architecture I" },
        { code: "COS342", name: "Computer Architecture II" },
        { code: "COS372", name: " Laboratory for digital design" },
        { code: "COS472", name: "Advance Digital Laboratory" }
      ]
    },

    {
      name: "Theoretical computer science",
      courses: [
        { code: "COS101", name: "Introduction to Computer Science" },
        { code: "COS102", name: "introduction to computer system" },
        { code: "COS331", name: "Compiler Construction I" },
        { code: "COS432", name: "Compiler Construction II" },
        { code: "COS333", name: "operating system I" },
        { code: "COS315", name: "operation research I" },
        { code: "COS316", name: "automata theory and formal language" },
        { code: "COS334", name: "operating system II" },
        { code: "COS413", name: "Queuing theory" },
        { code: "COS431", name: "software design" },
        { code: "COS457", name: "computer graphics" },
        { code: "COS452", name: "computer center management" }
      ]
    },

    {
      name: "Database Management",
      courses: [
        { code: "COS222", name: "Introduction To File Processing" },
        { code: "COS321", name: "Database Design I" },
        { code: "COS322", name: "Database Design II" },
        { code: "COS335", name: "System Analysis And Design" }
      ]
    },
    {
      name: "Data communication and Networkt",
      courses: [
        { code: "COS313", name: "Switching Algebra and Discrete Structures I" },
        {
          code: "COS314",
          name: "Switching Algebra and Discrete Structures II"
        },
        { code: "COS455", name: "Data Communication And Network I" },
        { code: "COS456", name: "Data Communication And Network II" }
      ]
    },
    {
      name: "Algorithm Design",
      courses: [
        { code: "COS352", name: "Data Structure" },
        { code: "COS311", name: "Numerical Method I" },
        { code: "COS411", name: "Numerical Method II" },
        { code: "COS451", name: "Algorithm" }
      ]
    }
  ]);
});

module.exports = router;
