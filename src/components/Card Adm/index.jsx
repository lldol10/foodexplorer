import { useState, useEffect} from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import {FiEdit} from 'react-icons/fi'
import { useNavigate } from "react-router-dom";



export function CardAdm({name, description, price, imagem, onDoubleClick, ...rest}){

    const [pratos, setPrato] = useState({})


    const navigate = useNavigate()

    //  function handlePrato(){
    //     console.log(pratos)
    //     setPrato(prevState => prevState.filter(prato => prato.name === name))

    //     console.log(pratos)
    //   navigate(`/pratoadm/${pratos[0].id}`)

    
       
    // }

    useEffect(() => {
        async function fetchPrato(){
           const response = await api.get(`/prato`)
           setPrato(response.data)
            
           
        }
     
        fetchPrato()
     }, [])

    

    return (
        <Container >
            <img src={imagem}  onDoubleClick={onDoubleClick}   />
            <div className="favorito">
                <FiEdit {...rest} />
            </div>
            <h2>{name}</h2>
            <p>{description}</p>
            <h1>{price}</h1>

        </Container>
    )
}