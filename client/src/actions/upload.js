import axios from "axios";
import {
  VIEW_COURSE,
  COURSE_UPLOAD,
  UPLOAD_ERRRORS,
  ALL_USERS,
  AREA_OF_SPECIALIZATION,
  SPECIALIZATION,
  ADD_STUDENT,
  ADVICE_STUDENT,
  ADVICE_ERROR
} from "./types";
import history from "../utils/history";

export const allCourses = course => ({
  type: VIEW_COURSE,
  course
});

export const coursesUploaded = courses => ({
  type: COURSE_UPLOAD,
  courses
});

export const errors = error => ({
  type: UPLOAD_ERRRORS,
  error
});

export const allUsers = users => ({
  type: ALL_USERS,
  users
});

export const areaOfSpecialization = area => ({
  type: AREA_OF_SPECIALIZATION,
  area
});

export const specializations = special => ({
  type: SPECIALIZATION,
  payload: special
});
export const viewCourses = () => dispatch => {
  axios
    .get("/api/course")
    .then(course => {
      const courses = [];
      for (let i = 0; i < course.data.length; i++) {
        for (let j = 0; j < course.data[i].course.length; j++) {
          courses.push({
            code: course.data[i].course[j].code,
            name: course.data[i].course[j].name
          });
        }
      }
      dispatch(allCourses(courses));
    })
    .catch(err => dispatch(errors(err)));
};

export const uploadCourses = data => dispatch => {
  axios
    .post("/api/course", data)
    .then(courses => {
      dispatch(coursesUploaded(courses.data.course));
    })
    .catch(err => dispatch(errors(err)));
};

export const viewUsers = () => dispatch => {
  axios.get("/api/users/all").then(user => {
    dispatch(allUsers(user.data));
  });
};

export const uploadGrade = data => dispatch => {
  axios.post("/api/course/career", data).then(res => {
    dispatch(areaOfSpecialization(res.data));
  });
};

export const getSpecialization = () => dispatch => {
  axios
    .get("/api/specialization")
    .then(special => {
      console.log(special.data);
      dispatch(specializations(special.data));
    })
    .catch(err => dispatch(errors(err)));
};

export const addStudent = data => dispatch => {
  axios.post("/api/course/add", data).then(res => {
    dispatch({
      type: ADD_STUDENT,
      payload: res.data
    });
  });
};

export const search = data => dispatch => {
  axios
    .post("/api/course/advice", { data })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: ADVICE_STUDENT,
        payload: res.data
      });

      setTimeout(() => {
        history.push("/advice");
      }, 1000);
    })
    .catch(err => {
      if (err.response.status === 400) {
        dispatch({
          type: ADVICE_ERROR,
          payload: err.response.data
        });
      }
    });
};
