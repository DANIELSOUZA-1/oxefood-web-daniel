import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function FormProduto() {
    const { state } = useLocation();
    const [idProduto, setIdProduto] = useState();
    const [codigo, setCodigo] = useState();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();

    const [listaCategoria, setListaCategoria] = useState([]);
    const [idCategoria, setIdCategoria] = useState();

    useEffect(() => {

        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/produto/" + state.id)
                .then((response) => {
                    setIdProduto(response.data.id)
                    setCodigo(response.data.codigo)
                    setTitulo(response.data.titulo)
                    setDescricao(response.data.descricao)
                    setValorUnitario(response.data.valorUnitario)
                    setTempoEntregaMinimo(response.data.tempoEntregaMinimo)
                    setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
                    setIdCategoria(response.data.categoria.id)
                })
        }

        axios.get("http://localhost:8080/api/categoria_produto")
            .then((response) => {
                const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
                setListaCategoria(dropDownCategorias);
            })

    }, [state])


    function salvar() {

        let produtoRequest = {
            idCategoria: idCategoria,
            codigo: codigo,
            titulo: titulo,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoEntregaMinimo: tempoEntregaMinimo,
            tempoEntregaMaximo: tempoEntregaMaximo
        }
 
        if (idProduto != null) { //Alteração:
            axios.put("http://localhost:8080/api/produto/" + idProduto, produtoRequest)
            .then((response) => { console.log('Produto alterado com sucesso.') })
            .catch((error) => { console.log('Erro ao alterar um produto.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/produto/", produtoRequest)
            .then((response) => { console.log('Produto cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o produto.') })
        }
    }

    return (
        <div>
            <MenuSistema />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                    <div className="flex gap-2 items-center text-3xl font-semibold">
                        <span className="text-gray-400">Entregador <span className="-mr-1 text-2xl font-bold">{'>'}</span><span className="text-2xl font-bold">{'>'}</span></span>
                        <span className="mr-1">Cadastro</span>
                    </div>
                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Código do produto'
                                    placeholder='Informe o código do produto'>
                                    <InputMask
                                        required
                                    />
                                </Form.Input>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Select
                                    required
                                    fluid
                                    tabIndex='3'
                                    placeholder='Selecione'
                                    label='Categoria'
                                    options={listaCategoria}
                                    value={idCategoria}
                                    onChange={(e, { value }) => {
                                        setIdCategoria(value)
                                    }}
                                />

                            </Form.Group>
                            <Form.TextArea label='Descrição' placeholder='Informe a descrição do produto' />
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Valor unitário'
                                    required
                                    width={6}>
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínima em Minutos'
                                    placeholder='30'
                                    width={6}>

                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máxima em Minutos'
                                    placeholder='40'
                                    width={6}>
                                </Form.Input>
                            </Form.Group>
                        </Form>
                        <div style={{ marginTop: '4%' }}>
                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
                            </Button>
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
