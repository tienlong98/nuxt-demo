import { BaseRequest } from "./BaseRequest";

class UserRequest extends BaseRequest {
  constructor() {
    super("/user");
  }
}

export default new UserRequest();
