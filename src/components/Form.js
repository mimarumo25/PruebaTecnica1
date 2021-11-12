import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, Button} from 'react-bootstrap';
import {url} from '../helpers/Url';
import { fileUpload } from '../helpers/fileUpload';
import '../styles/Forms.css'



export const Forms = () => {

    
    const [producto, setProducto] = useState({
        nombre: '',
        modelo: '',
        precio: '',
        describe: '',
        imagen: '',
        
    })

    const {nombre,modelo, precio, describe, imagen} = producto;

    const postData = () => {
         axios.post(url,producto)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
         
    }

    const handleChanged = ({target}) => {
        setProducto({
          ...producto,
          [target.name]: target.value
        })
    
      }

      const handleSubmit = (e) => {
       e.preventDefault();
      }

      const handleFileChange = (e) => {
        const file = e.target.files[0];
         fileUpload(file)
        .then(response => {
            producto.imagen = response;
        }).catch(error => {
            console.log(error.message)
        }) 
    }


    return (
        <div >
            <Container>
                <div><h3>Formulario de Registro</h3></div>
                <div className="cantenedor d-flex justify-content-center ">
                    <Form id="formulario" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="nombre">Nombre del Auto</Form.Label>
                            <Form.Control type="text" name="nombre" value={nombre} onChange={handleChanged}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="modelo">Modelo:</Form.Label>
                            <Form.Control type="number" name="modelo" value={modelo} onChange={handleChanged}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="precio">Precio:</Form.Label>
                            <Form.Control type="number" name="precio" value={precio} onChange={handleChanged} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="describe">Descripción:</Form.Label>
                            <Form.Control as="textarea" name="describe" value={describe} onChange={handleChanged}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="image">Imagen:</Form.Label>
                            <Form.Control type="file" name="image" value={imagen}    onChange={handleFileChange}/>
                        </Form.Group>
                        <Button variant="primary" size="lg" active onClick={() => postData()}>Guardar</Button>
                    </Form>
                </div>
            </Container>

        </div>
    );
}

