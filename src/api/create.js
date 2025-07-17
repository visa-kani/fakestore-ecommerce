import { postData } from "./actions";
import { URL_CONSTANTS } from "./url";

const createProduct = (params) => {
  return postData(URL_CONSTANTS.products, params);
};

export { createProduct };