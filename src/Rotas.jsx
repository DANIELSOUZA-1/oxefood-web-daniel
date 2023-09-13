import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/Cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListCliente from './views/Cliente/ListCliente';

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="form-cliente" element={ <FormCliente/> } />
            <Route path="list-cliente" element={ <ListCliente/> } />
            <Route path="form-produto" element={ <FormProduto/> } />
            <Route path="form-entregador" element={ <FormEntregador/> } />
        </Routes>
    )
}

export default Rotas
