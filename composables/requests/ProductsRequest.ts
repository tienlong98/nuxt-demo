import { BaseRequest } from "./BaseRequest";

class ProductsRequest extends BaseRequest {
  constructor() {
    super("/products");
  }
}

export default new ProductsRequest();
