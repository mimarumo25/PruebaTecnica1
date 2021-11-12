import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { url } from '../helpers/Url';
import '../styles/List.css'

export const List = () => {

    const [registro, setRegistro] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get(url)
            .then(response => {
                setRegistro(response.data)

            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteData = (id) => {
        axios.delete(url + id)
            .then(response => {
                getData();
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    console.log(registro)
    return (
        <div>
            <Container>
                <Table striped bordered hover>
                    <thead className="tableC">
                        <tr>
                            <th>Nombre</th>
                            <th>Modelo</th>
                            <th>Precio</th>
                            <th>Descripción</th>
                            <th>Imagen</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            registro.map(p => (
                                <tr key={p.id}>
                                    <td>{p.nombre}</td>
                                    <td>{p.modelo}</td>
                                    <td>{p.precio}</td>
                                    <td>{p.describe}</td>
                                    <td><img src={p.imagen} width="60" height="50" alt="" /></td>
                                    <td><Button variant="danger" onClick={() => deleteData(p.id)}>Eliminar</Button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}