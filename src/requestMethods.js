import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2Y4ZTMxZjk0NTllMzgxZTVhMTdiNiIsImlhdCI6MTY1NTQ1NzYyNiwiZXhwIjoxNjU1NzE2ODI2fQ.lkSP-wZgKfDpoYMVUEzabEZM_mG0LWpwIvOIZGiBl3U"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token:`Bearer ${TOKEN}` }
});