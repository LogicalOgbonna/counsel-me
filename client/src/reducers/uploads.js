import {
  VIEW_COURSE,
  COURSE_UPLOAD,
  UPLOAD_ERRRORS,
  ALL_USERS
} from "../actions/types";

const uploads = (state = {}, action = {}) => {
  switch (action.type) {
    case VIEW_COURSE:
      return {
        ...state,
        course: action.course
      };
    case COURSE_UPLOAD:
      return {
        ...state,
        courses: action.courses
      };
    case UPLOAD_ERRRORS:
      return {
        ...state,
        error: action.error
      };
    case ALL_USERS:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
};

export default uploads;
