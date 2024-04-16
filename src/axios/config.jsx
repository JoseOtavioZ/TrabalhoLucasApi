// Use Axios.create with a capital "A"
import React from "react";
import Axios from "axios";

const urlPlaceHolder = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    headers: {
        "Content-Type": "application/json"
    }
})

export default urlPlaceHolder;
