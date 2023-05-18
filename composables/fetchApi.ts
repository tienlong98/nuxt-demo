import { FetchOptions, $fetch } from "ofetch";

export default async function oFetchApi(
    url: string,
    options?: FetchOptions
) {
    const config = useRuntimeConfig();
    return await $fetch(url, {
        baseURL: config.public.baseUrl,
        retry: 0,
        ...options,
        async onResponse({ response }) {
            return response._data;
        }
    });
}