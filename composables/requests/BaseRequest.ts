import oFetchApi from "../fetchApi";

export class BaseRequest {
    protected resource: string;


    constructor(resource: string) {
        this.resource = resource;
    }

    /**
   * Get all data with response wrapped
   *
   * @param params
   * @returns
   */
    async getList(params?: object) {
        return await oFetchApi(this.resource, {
            method: "GET",
            query: params,
        });
    }

    async post(payload: object) {
        return await oFetchApi(`${this.resource}`, {
            method: "POST",
            body: payload,
        });
    }

}
