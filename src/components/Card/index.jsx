import { useState } from "react";

import { Container } from "./styles";
import {FiPlus} from 'react-icons/fi'
import {FiMinus} from 'react-icons/fi'
import {FiHeart} from 'react-icons/fi'

import {Button} from './../../components/Button'


export function Card({name, price, imagem, ...rest}){
    
    const [total, setTotal] = useState(0)


    function add(){
        setTotal(prevState => prevState + 1)
    }

    function less(){
        if(total == 0){
            return
        }else{
            setTotal(prevState => prevState - 1)
        }
        
    }

    return (
        <Container >
            <img src={imagem} {...rest}  alt="" />
            <div className="favorito">
                <FiHeart/>
            </div>
            <h2>{name}</h2>
            <h1>{price}</h1>
            <div className="quantidade">
                <FiMinus onClick={less}/>
                <h2>{total}</h2>
                <FiPlus onClick={add}/>
            </div>
            <Button title="Incluir"/>

        </Container>
    )
}