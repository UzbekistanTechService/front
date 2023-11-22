import axios, { AxiosInstance } from "axios";
import { createContext, useContext } from "react";

export class Api {
    baseUrl = "";
    tokenName = "";
    instance: AxiosInstance = axios.create();

    constructor({ baseUrl, tokenName }: { baseUrl: string; tokenName?: string }) {
        this.baseUrl = baseUrl;
        this.tokenName = tokenName || this.tokenName;

        this.createInstance();
    }

    createInstance() {
        const initialProps = {
            baseURL: this.baseUrl,
            timeout: 30000,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.getToken()}`,
            },
        };
        this.instance = axios.create(initialProps);
    }

    getToken() {
        return localStorage.getItem(this.tokenName);
    }

    checkToken() {
        return !!localStorage.getItem(this.tokenName);
    }

    async login(
        url: string,
        data: Record<string, any>,
        { onSuccess }: { onSuccess?: (res: Record<string, any>) => void },
    ) {
        try {
            const res = await this.instance.post(url, data);
            console.log(res);

            if (onSuccess) onSuccess(res);

            localStorage.setItem(this.tokenName, res.data?.access_token);
        } catch (e) {
            console.log(e);
        }
    }

    logOut() {
        localStorage.clear();
    }
}

// @ts-ignore
export const ApiContext = createContext({});
export const ApiProvider = ApiContext.Provider;
export const useApi = (): Api => useContext(ApiContext) as Api;