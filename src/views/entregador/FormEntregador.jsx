import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function FormEntregador() {

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();

    const [rua, setRua] = useState();
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [cep, setCep] = useState();
    const [uf, setUf] = useState();
    const [complemento, setComplemento] = useState();

    const [idEntregador, setIdEntregador] = useState();
    const { state } = useLocation();

    useEffect(() => {
        debugger
        console.log(state.id)
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/entregador/" + state.id)
                .then((response) => {
                    setIdEntregador(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setDataNascimento(formatarData(response.data.dataNascimento))
                    setFoneCelular(response.data.foneCelular)
                    setFoneFixo(response.data.foneFixo)

                    setQtdEntregasRealizadas(response.data.setQtdEntregasRealizadas)
                    setRua(response.data.rua)
                    setNumero(response.data.numero)
                    setBairro(response.data.bairro)
                    setCidade(response.data.cidade)
                    setCep(response.data.cep)
                    setUf(response.data.uf)
                    setComplemento(response.data.complemento)
                })
        }
    }, [state])

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-')

        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0]

    }

    function salvar() {
        let entregadorRequest = {
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            qtdEntregasRealizadas: qtdEntregasRealizadas,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            cep: cep,
            uf: uf,
            complemento: complemento
        }


        if (idEntregador != null) { //Alteração:
            axios.put("http://localhost:8080/api/entregador/" + idEntregador, entregadorRequest)
                .then((response) => { console.log('entregador alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um cliente.') })

        } else { //Cadastro:
            axios.post("http://localhost:8080/api/entregador", entregadorRequest)
                .then((response) => { console.log('entregador cadastrado com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o cliente.') })
        }

    }


    const options = [
        { key: 'ac', text: "Acre", value: "AC" },
        { key: 'al', text: "Alagoas", value: "AL" },
        { key: 'ap', text: "Amapá", value: "AP" },
        { key: 'am', text: "Amazonas", value: "AM" },
        { key: 'ba', text: "Bahia", value: "BA" },
        { key: 'ce', text: "Ceará", value: "CE" },
        { key: 'df', text: "Distrito Federal", value: "DF" },
        { key: 'es', text: "Espírito Santo", value: "ES" },
        { key: 'go', text: "Goiás", value: "GO" },
        { key: 'ma', text: "Maranhão", value: "MA" },
        { key: 'mt', text: "Mato Grosso", value: "MT" },
        { key: 'ms', text: "Mato Grosso do Sul", value: "MS" },
        { key: 'mg', text: "Minas Gerais", value: "MG" },
        { key: 'pa', text: "Pará", value: "PA" },
        { key: 'pb', text: "Paraíba", value: "PB" },
        { key: 'pr', text: "Paraná", value: "PR" },
        { key: 'pe', text: "Pernambuco", value: "PE" },
        { key: 'pi', text: "Piauí", value: "PI" },
        { key: 'rj', text: "Rio de Janeiro", value: "RJ" },
        { key: 'rn', text: "Rio Grande do Norte", value: "RN" },
        { key: 'rs', text: "Rio Grande do Sul", value: "RS" },
        { key: 'ro', text: "Rondônia", value: "RO" },
        { key: 'rr', text: "Roraima", value: "RR" },
        { key: 'sc', text: "Santa Catarina", value: "SC" },
        { key: 'sp', text: "São Paulo", value: "SP" },
        { key: 'se', text: "Sergipe", value: "SE" },
        { key: 'to', text: "Tocantins", value: "TO" }
    ]


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
                                    label='Nome'
                                    maxLength="100"
                                    width={10}
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    maxLength="100"
                                    width={5}
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='RG'
                                    maxLength="100"
                                    width={5}
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    maxLength="100"
                                    width={3.6}
                                    value={dataNascimento}
                                    onChange={e => setDataNascimento(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    maxLength="100"
                                    width={3.6}
                                    value={foneCelular}
                                    onChange={e => setFoneCelular(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    maxLength="100"
                                    width={3.6}
                                    value={foneFixo}
                                    onChange={e => setFoneFixo(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    maxLength="100"
                                    width={3.6}
                                    value={qtdEntregasRealizadas}
                                    onChange={e => setQtdEntregasRealizadas(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Por Frete'
                                    maxLength="100"
                                    width={3.6}
                                    value={qtdEntregasRealizadas}
                                    onChange={e => setQtdEntregasRealizadas(e.target.value)}

                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Rua'
                                    maxLength="100"
                                    width={14}
                                    value={rua}
                                    onChange={e => setRua(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='Número'
                                    maxLength="100"
                                    width={4}
                                    value={numero}
                                    onChange={e => setNumero(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                    width={7}
                                    value={bairro}
                                    onChange={e => setBairro(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    maxLength="100"
                                    width={7}
                                    value={cidade}
                                    onChange={e => setCidade(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='CEP'
                                    maxLength="100"
                                    width={4}
                                    value={cep}
                                    onChange={e => setCep(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Select
                                    fluid
                                    label='UF'
                                    options={options}
                                    defaultValue={uf}
                                    placeholder='Selecione'
                                    onChange={e => setUf(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    maxLength="100"
                                    value={complemento}
                                    onChange={e => setComplemento(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group inline>
                                <label>Ativo: </label>
                                <Form.Radio
                                    label='Sim'
                                    value='sim'
                                    checked={true}
                                />
                                <Form.Radio
                                    label='Não'
                                    value='nao'
                                />
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
