import React from "react";
import Axios from "axios";

const urlPlaceHolder = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    headers:{
        "Content-Type": "application/json"
    }
})

export default urlPlaceHolder;