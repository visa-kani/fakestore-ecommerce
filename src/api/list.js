import { getDataList, getDataByID } from "./actions";
import { URL_CONSTANTS } from "./url";

const listStudent = (params) => {
    return getDataList(URL_CONSTANTS.student_details, params);
};

export { listStudent };