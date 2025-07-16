import { postData } from "./actions";
import { URL_CONSTANTS } from "./url";

const createStudent = (params) => {
  return postData(URL_CONSTANTS.student_details, params);
};

export { createStudent };