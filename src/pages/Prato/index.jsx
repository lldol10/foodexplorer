import { Container } from "./styles";
import {FiPlus, FiMinus} from 'react-icons/fi'
import {Header} from './../../components/Header'
import {Button} from './../../components/Button'
import {Tag} from './../../components/Tag'
import {Rodape} from './../../components/Rodape'
import {ButtonText} from './../../components/ButtonText'
import SaladaRavanello from './../../assets/image 2.png'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import { api } from "../../services/api";

export function Prato(){

    const params = useParams()
    const [data, setData] = useState("")
    const [tags, setTags] = useState([])

    useEffect(() => {
        async function fetchPrato(){
            console.log(params.id)
           const response = await api.get(`/prato/${params.id}`)
           setData(response.data)
           setTags(response.data.tags)
           console.log(data)
           
        }
     
        fetchPrato()
     }, [])

    return(
        <>
                <Header/>

                <Container>
                    <div className="content">
                        
                        <div className="dish">
                        <Link to="/"> ← Voltar</Link>
                            <img src={`${api.defaults.baseURL}/files/${data.imagem}`} alt="" />
                        </div>

                        <div className="second-coll">
                            <div className="dish-info">
                              <h2>{data.name}</h2>
                              <p>{data.description}</p>
                            </div>

                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                   <Tag
                                   key={String(index)}
                                   title={tag.name}
                                   
                                   
                                   />
                                ))
                            
                                
                                
                            }
                            
                        </div>

                        <div className="pedir">
                            <div className="quantidade">
                                <FiMinus />
                                    <h3>01</h3>
                                <FiPlus/>
                            </div>
                            <Button title="Pedir">
                                
                            </Button>
                        </div>
                        
                        </div>
                    
                    </div>

                <Rodape/>
                </Container>       
        </>

    )
}