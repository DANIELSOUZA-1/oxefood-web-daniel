import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

import { notifyError, notifySuccess } from '../utils/utils';


export default function ListEntregador() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();


    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {
        axios.get("http://localhost:8080/api/entregador")
            .then((response) => {
                console.log(response)
                setLista(response.data)
            })
    }
    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        //let arrayData = dataParam.split('-')

        return dataParam[2] + '/' + dataParam[1] + '/' + dataParam[0]

    }

    function formatarEndereco(endereco) {

        return `numero ${endereco.numero}, ${endereco.rua}, ${endereco.bairro}, ${endereco.cidede}, ${endereco.cep}, ${endereco.uf}, ${endereco.complemento} `

    }

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    async function remover() {

        await axios.delete('http://localhost:8080/api/entregador/' + idRemover)
        .then((response) => {
  
            notifySuccess('Cliente removido com sucesso.')
  
            axios.get("http://localhost:8080/api/entregador")
            .then((response) => {
                setLista(response.data)
            })
        })
        .catch((error) => {
            notifyError('Erro ao remover um entregador.')
        })
        setOpenModal(false)
    }
 


    return (
        <div>
            <MenuSistema />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> Entregador </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-entregador'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nome</Table.HeaderCell>
                                    <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                                    <Table.HeaderCell>Fone</Table.HeaderCell>

                                    <Table.HeaderCell>Endereço</Table.HeaderCell>
                                    <Table.HeaderCell>qtd Entregas Realizadas</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(entregador => (

                                    <Table.Row key={entregador.id}>
                                        <Table.Cell>{entregador.nome}<br />{entregador.cpf}</Table.Cell>
                                        <Table.Cell>{formatarData(entregador.dataNascimento)}</Table.Cell>
                                        <Table.Cell>{entregador.foneCelular}<br />{entregador.foneFixo}</Table.Cell>
                                        <Table.Cell>{formatarEndereco(
                                            {
                                                rua: entregador.rua,
                                                numero: entregador.numero,
                                                bairro: entregador.bairro,
                                                cidade: entregador.cidade,
                                                cep: entregador.cep,
                                                uf: entregador.uf,
                                                complemento: entregador.complemento,
                                            }
                                        )}</Table.Cell>
                                        <Table.Cell>{entregador.qtdEntregasRealizadas}</Table.Cell>

                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste entregador'
                                                icon>
                                                <Icon name='edit' />
                                                <Link to="/form-entregador" state={{ id: entregador.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                            </Button> &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este entregador'
                                                onClick={e => confirmaRemover(entregador.id)}
                                                icon>
                                                <Icon name='trash' />
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>
            <Modal
                basic
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
            >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={() => remover()}>
                        <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>

        </div>
    )


}