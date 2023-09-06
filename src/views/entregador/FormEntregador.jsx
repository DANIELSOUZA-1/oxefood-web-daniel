import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";

export default function FormEntregador() {

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
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    maxLength="100"
                                    width={5}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='RG'
                                    maxLength="100"
                                    width={5}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    maxLength="100"
                                    width={3.6}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    maxLength="100"
                                    width={3.6}
                                />
                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    maxLength="100"
                                    width={3.6}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    maxLength="100"
                                    width={3.6}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Por Frete'
                                    maxLength="100"
                                    width={3.6}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Rua'
                                    maxLength="100"
                                    width={14}
                                />
                                <Form.Input
                                    fluid
                                    label='Número'
                                    maxLength="100"
                                    width={4}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                    width={7}
                                />
                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    maxLength="100"
                                    width={7}
                                />
                                <Form.Input
                                    fluid
                                    label='CEP'
                                    maxLength="100"
                                    width={4}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Select
                                    fluid
                                    label='UF'
                                    options={options}
                                    value=''
                                    placeholder='Selecione'
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    maxLength="100"
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
