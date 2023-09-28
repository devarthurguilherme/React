import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "06cbb0c81e81427d9e15c1649995f490"
    }
})