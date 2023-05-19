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
    async put(id: number, payload: object, key?: boolean) {
        return await oFetchApi(`${this.resource}`, {
            method: "PUT",
            body: {
                id: id,
                ...payload
            },
        });
    }

    async delete(id: number, key?: boolean) {
        return await oFetchApi(`${this.resource}`, {
            method: "DELETE",
            body: {
                id: id
            }
        });
    }
    async show(id: number, key?: boolean) {
        return await oFetchApi(`${this.resource}`, {
            method: "GET",
            query: {
                id: id
            }
        });
    }

}
