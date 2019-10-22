const express = require("express");
const router = express.Router();
const passport = require("passport");

const Course = require("../../model/Course");
const Student = require("../../model/Student");

// @route   GET api/course
// @desc    Get all courses
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.who === "hod") {
      return Course.find({}).then(course => res.json(course));
    } else {
      return res.status(401).json("Unauthorized");
    }
  }
);

// @route   POST api/course
// @desc    POST courses
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.admin) {
      if (req.body) {
        return new Course(req.body)
          .save()
          .then(ca => res.json(ca))
          .catch(err => res.status(400).json(err));
      }
    } else {
      return res.status(401).json("Unauthorized");
    }
  }
);

// @route   POST api/course
// @desc    POST courses
// @access  Public
router.post(
  "/career",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (!req.body.length) {
      return res.json({
        message: "You Did not pass any course"
      });
    }
    let AI = {
      course: [
        { code: "COS415", name: "System Modeling and Simulation" },
        { code: "COS453", name: "Computer process control" },
        { code: "COS412", name: "Computer Performance Evaluation" },
        { code: "COS454", name: "Artificial Intelligence" },
        { code: "COS458", name: "Expert System" }
      ],
      courses: [],
      totalPoint: 0,
      area: "Artificial Intelligence",
      definition: "Something about it"
    };
    let ST = {
      course: [
        { code: "COS104", name: "Computing practice" },
        { code: "COS201", name: "Computer Programming" },
        { code: "COS251", name: "Assembly language programming" },
        { code: "COS202", name: "	Computer Programming II" },
        { code: "COS461", name: "Organization Of Programing Language" },
        { code: "COS462", name: "Structured programming" },
        { code: "COS414", name: "Operation Research II" },
        { code: "COS464", name: "Concurrent Programming" }
      ],
      courses: [],
      totalPoint: 0,
      area: "Software theory",
      definition: "Something about it"
    };
    let SE = {
      course: [
        { code: "COS301", name: "Introduction To Digital Design" },
        { code: "COS303", name: "	Introduction To Microcomputer" },
        { code: "COS341", name: "Computer Architecture I" },
        { code: "COS342", name: "Computer Architecture II" },
        { code: "COS372", name: " Laboratory for digital design" },
        { code: "COS472", name: "Advance Digital Laboratory" }
      ],
      courses: [],
      totalPoint: 0,
      area: "Software theory",
      definition: "Something about it"
    };
    let TCS = {
      course: [
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
      ],
      courses: [],
      totalPoint: 0,
      area: "Theoretical computer science",
      definition: "Something about it"
    };
    let DB = {
      course: [
        { code: "COS222", name: "Introduction To File Processing" },
        { code: "COS321", name: "Database Design I" },
        { code: "COS322", name: "Database Design II" },
        { code: "COS335", name: "System Analysis And Design" }
      ],
      courses: [],
      totalPoint: 0,
      area: "Data Base",
      definition: "Something about it"
    };
    let DC = {
      course: [
        { code: "COS313", name: "Switching Algebra and Discrete Structures I" },
        {
          code: "COS314",
          name: "Switching Algebra and Discrete Structures II"
        },
        { code: "COS455", name: "Data Communication And Network I" },
        { code: "COS456", name: "Data Communication And Network II" }
      ],
      courses: [],
      totalPoint: 0,
      area: "Data Communication and Network",
      definition: "Something about it"
    };
    let AD = {
      course: [
        { code: "COS352", name: "Data Structure" },
        { code: "COS311", name: "Numerical Method I" },
        { code: "COS411", name: "Numerical Method II" },
        { code: "COS451", name: "Algorithm" }
      ],
      courses: [],
      totalPoint: 0,
      area: "Algorithm Design",
      definition: "Something about it"
    };
    req.body.map(course => {
      if (
        course.code === "COS415" ||
        course.code === "COS453" ||
        course.code === "COS412" ||
        course.code === "COS454" ||
        course.code === "COS458"
      ) {
        AI.courses.push(course);
        AI.totalPoint += matchGrade(course.grade);
      }
      if (
        course.code === "COS104" ||
        course.code === "COS201" ||
        course.code === "COS251" ||
        course.code === "COS202" ||
        course.code === "COS461" ||
        course.code === "COS462" ||
        course.code === "COS414" ||
        course.code === "COS464"
      ) {
        ST.courses.push(course);
        ST.totalPoint += course.point;
      }
      if (
        course.code === "COS301" ||
        course.code === "COS303" ||
        course.code === "COS341" ||
        course.code === "COS342" ||
        course.code === "COS372" ||
        course.code === "COS472"
      ) {
        SE.courses.push(course);
        SE.totalPoint += course.point;
      }
      if (
        course.code === "COS101" ||
        course.code === "COS102" ||
        course.code === "COS331" ||
        course.code === "COS432" ||
        course.code === "COS333" ||
        course.code === "COS315" ||
        course.code === "COS316" ||
        course.code === "COS334" ||
        course.code === "COS413" ||
        course.code === "COS431" ||
        course.code === "COS457" ||
        course.code === "COS452"
      ) {
        TCS.courses.push(course);
        TCS.totalPoint += course.point;
      }
      if (
        course.code === "COS222" ||
        course.code === "COS321" ||
        course.code === "COS322" ||
        course.code === "COS335"
      ) {
        DB.courses.push(course);
        DB.totalPoint += course.point;
      }
      if (
        course.code === "COS313" ||
        course.code === "COS314" ||
        course.code === "COS455" ||
        course.code === "COS456"
      ) {
        DC.courses.push(course);
        DC.totalPoint += course.point;
      }
      if (
        course.code === "COS352" ||
        course.code === "COS311" ||
        course.code === "COS411" ||
        course.code === "COS451"
      ) {
        AD.courses.push(course);
        AD.totalPoint += course.point;
      }
    });
    AI.averagePoint =
      AI.totalPoint / AI.courses.length ? AI.totalPoint / AI.courses.length : 0;
    ST.averagePoint =
      ST.totalPoint / ST.courses.length ? ST.totalPoint / ST.courses.length : 0;
    SE.averagePoint =
      SE.totalPoint / SE.courses.length ? SE.totalPoint / SE.courses.length : 0;
    TCS.averagePoint =
      TCS.totalPoint / TCS.courses.length
        ? TCS.totalPoint / TCS.courses.length
        : 0;
    DB.averagePoint =
      DB.totalPoint / DB.courses.length ? DB.totalPoint / DB.courses.length : 0;
    DC.averagePoint =
      DC.totalPoint / DC.courses.length ? DC.totalPoint / DC.courses.length : 0;
    AD.averagePoint =
      AD.totalPoint / AD.courses.length ? AD.totalPoint / AD.courses.length : 0;

    const sortNumbers = (a, b) => {
      return a.averagePoint - b.averagePoint;
    };
    const array = [AI, ST, SE, TCS, DB, DC, AD];
    const advice = array.sort(sortNumbers);
    res.json(advice[advice.length - 1]);
  }
);

// @route   POST api/course
// @desc    POST courses
// @access  Private
router.post("/add", passport.authenticate("jwt", {session: false}), (req, res) => {
  Student.findOne({regNo: req.body.regNo}).then(student => {
    if(!student){
      const tempStudent = {
        name: req.body.name,
        regNo: req.body.regNo,
        courses: []
      };
      tempStudent.courses.push({
        code: req.body.courseCode,
        grade: req.body.grade
      })
      const newStudent = new Student(tempStudent);
     return newStudent.save().then(doc => res.json(doc))
    } else {
      student.courses.push({
        code: req.body.courseCode,
        grade: req.body.grade
      });
      student.save().then(doc => res.json(doc))
    }
  })
});

router.post(
  "/advice",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // if (!req.body.length) {
    //   return res.json({
    //     message: "You Did not pass any course"
    //   });
    // }
    let AI = {
      course: [
        { code: "COS415", name: "System Modeling and Simulation" },
        { code: "COS453", name: "Computer process control" },
        { code: "COS412", name: "Computer Performance Evaluation" },
        { code: "COS454", name: "Artificial Intelligence" },
        { code: "COS458", name: "Expert System" }
      ],
      courses: [],
      totalPoint: 0,
      area: "Artificial Intelligence",
      definition: "Something about it"
    };
    let ST = {
      course: [
        { code: "COS104", name: "Computing practice" },
        { code: "COS201", name: "Computer Programming" },
        { code: "COS251", name: "Assembly language programming" },
        { code: "COS202", name: "	Computer Programming II" },
        { code: "COS461", name: "Organization Of Programing Language" },
        { code: "COS462", name: "Structured programming" },
        { code: "COS414", name: "Operation Research II" },
        { code: "COS464", name: "Concurrent Programming" }
      ],
      courses: [],
      totalPoint: 0,
      area: "Software theory",
      definition: "Something about it"
    };
    let SE = {
      course: [
        { code: "COS301", name: "Introduction To Digital Design" },
        { code: "COS303", name: "	Introduction To Microcomputer" },
        { code: "COS341", name: "Computer Architecture I" },
        { code: "COS342", name: "Computer Architecture II" },
        { code: "COS372", name: " Laboratory for digital design" },
        { code: "COS472", name: "Advance Digital Laboratory" }
      ],
      courses: [],
      totalPoint: 0,
      area: "Software theory",
      definition: "Something about it"
    };
    let TCS = {
      course: [
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
      ],
      courses: [],
      totalPoint: 0,
      area: "Theoretical computer science",
      definition: "Something about it"
    };
    let DB = {
      course: [
        { code: "COS222", name: "Introduction To File Processing" },
        { code: "COS321", name: "Database Design I" },
        { code: "COS322", name: "Database Design II" },
        { code: "COS335", name: "System Analysis And Design" }
      ],
      courses: [],
      totalPoint: 0,
      area: "Data Base",
      definition: "Something about it"
    };
    let DC = {
      course: [
        { code: "COS313", name: "Switching Algebra and Discrete Structures I" },
        {
          code: "COS314",
          name: "Switching Algebra and Discrete Structures II"
        },
        { code: "COS455", name: "Data Communication And Network I" },
        { code: "COS456", name: "Data Communication And Network II" }
      ],
      courses: [],
      totalPoint: 0,
      area: "Data Communication and Network",
      definition: "Something about it"
    };
    let AD = {
      course: [
        { code: "COS352", name: "Data Structure" },
        { code: "COS311", name: "Numerical Method I" },
        { code: "COS411", name: "Numerical Method II" },
        { code: "COS451", name: "Algorithm" }
      ],
      courses: [],
      totalPoint: 0,
      area: "Algorithm Design",
      definition: "Something about it"
    };
    
    Student.findOne({regNo: req.body.data}).then(student => {

      const matchGrade = (alpabet) => {
        if(alpabet.trim().toLowerCase() === "a"){
          return 5;
        }
        if(alpabet.trim().toLowerCase() === "b"){

          return 4;
        }
        if(alpabet.trim().toLowerCase() === "c"){

          return 3;
        }
        if(alpabet.trim().toLowerCase() === "d"){

          return 2;
        }
      }
      if(!student){
        return res.status(400).json("No Student with Reg No: "+ req.body.data)
      }

      student.courses.map(course => {
        if (
          course.code === "COS415" ||
          course.code === "COS453" ||
          course.code === "COS412" ||
          course.code === "COS454" ||
          course.code === "COS458"
        ) {
          AI.courses.push(course);
          
          AI.totalPoint += matchGrade(course.grade);

        }
        if (
          course.code === "COS104" ||
          course.code === "COS201" ||
          course.code === "COS251" ||
          course.code === "COS202" ||
          course.code === "COS461" ||
          course.code === "COS462" ||
          course.code === "COS414" ||
          course.code === "COS464"
        ) {
          ST.courses.push(course);
            ST.totalPoint += matchGrade(course.grade);
        }
        if (
          course.code === "COS301" ||
          course.code === "COS303" ||
          course.code === "COS341" ||
          course.code === "COS342" ||
          course.code === "COS372" ||
          course.code === "COS472"
        ) {
          SE.courses.push(course);
          SE.totalPoint += matchGrade(course.grade);
          
        }
        if (
          course.code === "COS101" ||
          course.code === "COS102" ||
          course.code === "COS331" ||
          course.code === "COS432" ||
          course.code === "COS333" ||
          course.code === "COS315" ||
          course.code === "COS316" ||
          course.code === "COS334" ||
          course.code === "COS413" ||
          course.code === "COS431" ||
          course.code === "COS457" ||
          course.code === "COS452"
        ) {
          TCS.courses.push(course);
          TCS.totalPoint += matchGrade(course.grade);
          
        }
        if (
          course.code === "COS222" ||
          course.code === "COS321" ||
          course.code === "COS322" ||
          course.code === "COS335"
        ) {
          DB.courses.push(course);
          DB.totalPoint += matchGrade(course.grade);
          
        }
        if (
          course.code === "COS313" ||
          course.code === "COS314" ||
          course.code === "COS455" ||
          course.code === "COS456"
        ) {
          DC.courses.push(course);
          DC.totalPoint += matchGrade(course.grade);
          
        }
        if (
          course.code === "COS352" ||
          course.code === "COS311" ||
          course.code === "COS411" ||
          course.code === "COS451"
        ) {
          AD.courses.push(course);
          AD.totalPoint += matchGrade(course.grade);
          
        }
      });
      AI.averagePoint =
        AI.totalPoint / AI.courses.length ? AI.totalPoint / AI.courses.length : 0;
      ST.averagePoint =
        ST.totalPoint / ST.courses.length ? ST.totalPoint / ST.courses.length : 0;
      SE.averagePoint =
        SE.totalPoint / SE.courses.length ? SE.totalPoint / SE.courses.length : 0;
      TCS.averagePoint =
        TCS.totalPoint / TCS.courses.length
          ? TCS.totalPoint / TCS.courses.length
          : 0;
      DB.averagePoint =
        DB.totalPoint / DB.courses.length ? DB.totalPoint / DB.courses.length : 0;
      DC.averagePoint =
        DC.totalPoint / DC.courses.length ? DC.totalPoint / DC.courses.length : 0;
      AD.averagePoint =
        AD.totalPoint / AD.courses.length ? AD.totalPoint / AD.courses.length : 0;
  
      const sortNumbers = (a, b) => {
        return a.averagePoint - b.averagePoint;
      };
      const array = [AI, ST, SE, TCS, DB, DC, AD];
      const advice = array.sort(sortNumbers);
      res.json(advice[advice.length - 1]);
    })
  }
);

module.exports = router;
