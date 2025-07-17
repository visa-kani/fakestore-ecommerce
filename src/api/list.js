import { getDataList } from "./actions";
import { URL_CONSTANTS } from "./url";

const listProduct = (params) => {
    return getDataList(URL_CONSTANTS.products, params);
};

export { listProduct };