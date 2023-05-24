import { BaseRequest } from "./BaseRequest";

class UploadsRequest extends BaseRequest {
  constructor() {
    super("/uploads");
  }
}

export default new UploadsRequest();
