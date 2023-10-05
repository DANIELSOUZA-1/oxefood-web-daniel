import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { notifyError, notifySuccess } from '../utils/utils';


export default function FormCupomDesconto() {
    const { state } = useLocation();

    const [idCupomDesconto, setIdCupomDesconto] = useState();
    const [codDesconto, setCodigo] = useState();
    const [percentualDesconto, setPercentualDesconto] = useState();

    const [valorDesconto, setValorDesconto] = useState();
    const [valorMinimoPedidoPermitido, setValorMinimoPedidoPermitido] = useState();
    const [quantidadeMaximaUso, setQuantidadeMaximaUso] = useState();

    const [inicioVigencia, setInicioVigencia] = useState();
    const [fimVigencia, setFimVigencia] = useState();


    useEffect(() => {

        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/cupom_desconto/" + state.id)
                .then((response) => {
                    setIdCupomDesconto(response.data.id)
                    setCodigo(response.data.codDesconto)
                    setPercentualDesconto(response.data.percentualDesconto)
                    setValorDesconto(response.data.valorDesconto)
                    setValorMinimoPedidoPermitido(response.data.valorMinimoPedidoPermitido)
                    setQuantidadeMaximaUso(response.data.quantidadeMaximaUso)
                    setInicioVigencia(response.data.inicioVigencia)
                    setFimVigencia(response.data.fimVigencia)
                })
        }

    }, [state])


    function salvar() {
        debugger

        let cupom_descontoRequest = {
            codDesconto: codDesconto,
            percentualDesconto: percentualDesconto,
            valorDesconto: valorDesconto,
            valorMinimoPedidoPermitido: valorMinimoPedidoPermitido,
            quantidadeMaximaUso: quantidadeMaximaUso,
            inicioVigencia: inicioVigencia,
            fimVigencia: fimVigencia
        }

        if (idCupomDesconto != null) { //Alteração:
            axios.put("http://localhost:8080/api/cupom_desconto/" + idCupomDesconto, cupom_descontoRequest)
                .then((response) => { notifySuccess('CupomDesconto alterado com sucesso.') })
                .catch((error) => { notifyError('Erro ao alterar um cupom_desconto.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/cupom_desconto/", cupom_descontoRequest)
                .then((response) => { notifySuccess('CupomDesconto cadastrado com sucesso.') })
                .catch((error) => { notifyError('Erro ao incluir o cupom_desconto.') })
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
                                    label='Código do Desconto'
                                    placeholder='Informe o código do cupom'
                                    maxLength="100"
                                    value={codDesconto}
                                    onChange={e => setCodigo(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Percentual do Desconto'
                                    placeholder='Informe o percentual do desconto'
                                    >
                                    <InputMask
                                    value={percentualDesconto}
                                    onChange={e => setPercentualDesconto(e.target.value)}
                                        required
                                    />
                                </Form.Input>

                            </Form.Group>


                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Valor do Desconto'
                                    placeholder='Informe o valor do desconto'
                                    maxLength="100"
                                    value={valorDesconto}
                                    onChange={e => setValorDesconto(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Minimo Permitido'
                                    placeholder='Informe o valor minimo'
                                    >
                                    <InputMask
                                        value={valorMinimoPedidoPermitido}
                                        onChange={e => setValorMinimoPedidoPermitido(e.target.value)}
                                        required
                                    />
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='Quantidade Máxima de Uso'
                                    placeholder='Informe o valor minimo'
                                    >
                                    <InputMask
                                        value={quantidadeMaximaUso}
                                        onChange={e => setQuantidadeMaximaUso(e.target.value)}
                                        required
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Inicio Vigência'
                                    width={8}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={inicioVigencia}
                                        onChange={e => setInicioVigencia(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Fim Vigência'
                                    width={8}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={fimVigencia}
                                        onChange={e => setFimVigencia(e.target.value)}
                                    />
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
                                onClick={() => salvar()}
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
