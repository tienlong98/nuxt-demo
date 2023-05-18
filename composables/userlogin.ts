import oFetchApi from "./fetchApi";
import { JSONResponse, User } from "../types/types";
export default function useLogin() {
    return {
        login,
    };
}

/**
 * @desc Register new user
 * @param user User to log in
 * @returns {Promise<JSONResponse>}
 */
async function login(user: User): Promise<JSONResponse> {
    return await oFetchApi(``, {
        method: "POST",
        body: user,
    });

}