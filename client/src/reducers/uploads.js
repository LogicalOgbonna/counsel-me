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
} from "../actions/types";

const iniitalState = {
  course: [],
  courses: [],
  error: {},
  student: {},
  advice: {},
  adviceError: ""
};
const uploads = (state = iniitalState, action = {}) => {
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
    case AREA_OF_SPECIALIZATION:
      return {
        ...state,
        career: action.area
      };
    case SPECIALIZATION:
      return {
        ...state,
        specialization: action.payload
      };
    case ADD_STUDENT:
      return {
        ...state,
        student: action.payload
      };
    case ADVICE_STUDENT:
      return {
        ...state,
        advice: action.payload
      }
    case ADVICE_ERROR: 
    return {
      ...state,
      adviceError: action.payload
    }
    default:
      return state;
  }
};

export default uploads;
