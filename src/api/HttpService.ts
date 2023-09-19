import axios from "axios";

export const HttpService = axios.create({
	baseURL: "https://naszsklep-api.vercel.app/api",
});
