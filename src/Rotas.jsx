import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/Cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListCliente from './views/Cliente/ListCliente';
import ListEntregador from './views/entregador/ListEntregador';
import ListProduto from './views/produto/ListProduto';
import FormCupomDesconto from './views/cupomDesconto/FormCupomDesconto';
import ListCupomDesconto from './views/cupomDesconto/ListCupomDesconto';

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="form-cliente" element={ <FormCliente/> } />
            <Route path="list-cliente" element={ <ListCliente/> } />
            <Route path="form-produto" element={ <FormProduto/> } />
            <Route path="list-produto" element={ <ListProduto/> } />
            <Route path="form-entregador" element={ <FormEntregador/> } />
            <Route path="list-entregador" element={ <ListEntregador/> } />
            <Route path="form-cupom_desconto" element={ <FormCupomDesconto/> } />
            <Route path="list-cupom_desconto" element={ <ListCupomDesconto/> } />

        </Routes>
    )
}

export default Rotas
