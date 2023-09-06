import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";

export default function FormProduto () {

    return (
        <div>
            <MenuSistema />
            <div style={{marginTop: '3%'}}>
                <Container textAlign='justified' >
                    <div className="flex gap-2 items-center text-3xl font-semibold">
                        <span className="text-gray-400">Entregador <span className="-mr-1 text-2xl font-bold">{'>'}</span><span className="text-2xl font-bold">{'>'}</span></span>
                        <span className="mr-1">Cadastro</span>
                    </div>
                    <Divider />
                    <div style={{marginTop: '4%'}}>
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
                                    label='Tempo de Entrega Mínima em Minutos'
                                    placeholder='40'
                                    width={6}>
                                </Form.Input>
                            </Form.Group>
                        </Form>
                        <div style={{marginTop: '4%'}}>
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
