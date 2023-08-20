import { Container } from "./styles";
import {HeaderAdm} from './../../components/Header Adm'
import {Button} from './../../components/Button'
import {Tag} from './../../components/Tag'
import {Rodape} from './../../components/Rodape'
import {ButtonText} from './../../components/ButtonText'
import SaladaRavanello from './../../assets/image 2.png'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import {useNavigate} from 'react-router-dom'

export function PratoAdm(){

    

    const params = useParams()
    const [data, setData] = useState("")
    const [tags, setTags] = useState([])
    const navigate = useNavigate()

    function handleBack(){
        navigate("/")
    }

    function handleEdit(id) {
        navigate(`/editarprato/${id}`);
      }

    useEffect(() => {
        async function fetchPrato(){
            
           const response = await api.get(`/prato/${params.id}`)
           setData(response.data)
           setTags(response.data.tags)
           
           
        }
     
        fetchPrato()
     }, [])

    return(
        <>
                <HeaderAdm/>

                <Container>
                    <div className="content">
                        <div className="dish">
                            <ButtonText title="< voltar" onClick={handleBack} />
                            <img src={`${api.defaults.baseURL}/files/${data.imagem}`} alt="" />
                        </div>

                        <div className="second-coll">
                            
                            <div className="dish-info">
                              <h2>{data.name}</h2>
                              <p>{data.description}</p>
                            </div>

                        <div className="tags">
                        {tags.map((tag, index) => (
                                   <Tag
                                   key={String(index)}
                                   title={tag.name}
                                   
                                   
                                   />
                                ))}
                            
                        </div>

                            <Button title="Editar o Prato" onClick={() => handleEdit(data.id)}/>
                                
                        </div>
                    
                    </div>

                <Rodape/>
                </Container>       
        </>

    )
}