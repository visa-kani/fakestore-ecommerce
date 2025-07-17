import { updateData } from "./actions";
import { URL_CONSTANTS } from "./url";

const updateProduct = (params, id) => {
  console.log("params--update", params);
  return updateData(URL_CONSTANTS.products, params, id);
};

export { updateProduct };