import axios from "axios";
import { VIEW_COURSE, COURSE_UPLOAD, UPLOAD_ERRRORS, ALL_USERS } from "./types";

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
