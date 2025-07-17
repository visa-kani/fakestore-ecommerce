import { deleteData } from "./actions";
import { URL_CONSTANTS } from "./url";

const deleteProduct = (id) => {
  return deleteData(URL_CONSTANTS.products, id);
};

export { deleteProduct };