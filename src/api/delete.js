import { deleteData } from "./actions";
import { URL_CONSTANTS } from "./url";

const deleteStudent = (id) => {
  return deleteData(URL_CONSTANTS.student_details, id);
};

export { deleteStudent };