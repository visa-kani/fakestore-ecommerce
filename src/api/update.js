import { updateData } from "./actions";
import { URL_CONSTANTS } from "./url";

const updateStudent = (params, id) => {
  console.log("params--update", params);
  return updateData(URL_CONSTANTS.student_details, params, id);
};

export { updateStudent };