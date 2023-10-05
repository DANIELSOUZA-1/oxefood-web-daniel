import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { notifyError, notifySuccess } from '../utils/utils';


export default function ListCupomDesconto() {

    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();


    const [lista, setLista] = useState([]);

    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {
        axios.get("http://localhost:8080/api/cupom_desconto")
            .then((response) => {
                setLista(response.data)
            })
    }
    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        // let arrayData = dataParam.split('-')

        return dataParam[2] + '/' + dataParam[1] + '/' + dataParam[0]

    }

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    async function remover() {

        await axios.delete('http://localhost:8080/api/cupom_desconto/' + idRemover)
        .then((response) => {
   
            notifySuccess('CupomDesconto removido com sucesso.')
   
            axios.get('http://localhost:8080/api/cupom_desconto')
            .then((response) => {
                setLista(response.data)
            })
        })
        .catch((error) => {
            notifyError('Erro ao remover um cupom_desconto.')
        })
 
        setOpenModal(false)
 }
 


    return (
        <div>
            <MenuSistema />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> CupomDesconto </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-cupom_desconto'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Código</Table.HeaderCell>
                                    <Table.HeaderCell>Percentual</Table.HeaderCell>
                                    <Table.HeaderCell>Valor</Table.HeaderCell>
                                    <Table.HeaderCell>Valor Minimo</Table.HeaderCell>
                                    <Table.HeaderCell>Qtd Maxima Uso</Table.HeaderCell>
                                    <Table.HeaderCell>Inicio</Table.HeaderCell>
                                    <Table.HeaderCell>Fim</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(cupom_desconto => (

                                    <Table.Row key={cupom_desconto.id}>
                                        <Table.Cell>{cupom_desconto.codDesconto}</Table.Cell>
                                        <Table.Cell>{cupom_desconto.percentualDesconto}</Table.Cell>
                                        <Table.Cell>{cupom_desconto.valorDesconto}</Table.Cell>
                                        <Table.Cell>{cupom_desconto.valorMinimoPedidoPermitido}</Table.Cell>
                                        <Table.Cell>{cupom_desconto.quantidadeMaximaUso}</Table.Cell>
                                        <Table.Cell>{cupom_desconto.inicioVigencia}</Table.Cell>
                                        <Table.Cell>{cupom_desconto.fimVigencia}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste cupom_desconto'
                                                icon>
                                                <Link to="/form-cupom_desconto" state={{ id: cupom_desconto.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                            </Button> &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este cupom_desconto'
                                                icon
                                                onClick={e => confirmaRemover(cupom_desconto.id)}>
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