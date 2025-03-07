import axios from "axios";

const myaxios = axios.create({
    baseURL: "//inertia-pos.manirul.xyz/api",
    headers: {
        "Content-Type": "application/json",
    },
});


export default myaxios;