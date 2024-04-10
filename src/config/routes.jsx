import React from "react";
import { Route, Routes } from "react-router-dom";

import AdicionarPost from "../pages/AdicionarPost";
import ListaPost from "../pages/ListaPost";
import Home from "../pages/Home";

function Rotas() {
    return (
        <Routes>
            <Route path="/Home" element={<Home />} > </Route>
            <Route path="/AdicionarPost" element={<AdicionarPost />}> </Route>
            <Route path="/ListaPost" element={<ListaPost />}> </Route>
        </Routes>
    )
}


export default Rotas; 