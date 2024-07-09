import axios from "axios";

export const numbersApi = axios.create({
	baseURL: "http://numbersapi.com",
});

export async function fetchMath(): Promise<string> {
	const response = await numbersApi.get("/random/math");
	return response.data;
}

export async function fetchDate(): Promise<string> {
	const response = await numbersApi.get("/random/date");
	return response.data;
}
