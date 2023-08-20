import { useState } from "react";

import {api} from '../../services/api'
import {useNavigate} from 'react-router-dom'
import { Container } from "./styles";
import {FiDownload} from 'react-icons/fi'
import {HeaderAdm} from './../../components/Header Adm'
import { Button } from "../../components/Button";
import {Rodape} from './../../components/Rodape'
import {ButtonText} from './../../components/ButtonText'
import { Input } from "../../components/Input";
import { Ingrediente } from "../../components/Ingrediente";


export function NovoPrato(){

   const [name, setName] = useState("")
   const [description, setDescription] = useState("")

   const element = document.querySelector('#categoria')
   

   const [price, setPrice] = useState("")

   const [tags, setTags] = useState([])
   const [newTag, setNewTag] = useState([])

   const navigate = useNavigate()

   function handleBack(){
      navigate('/')
   }

   function handleAddTag(tagDeleted){
      setTags(prevState => [...prevState, newTag])
     setNewTag("")
     
   }




   function handleRemoveTag(deleted){
      setTags(prevState => prevState.filter(tag => tag !== deleted))
     
   }

 

   async function handleNewPrato(){
      const category = element.value
      alert('Prato inserido com sucesso')
    await api.post("/prato", {
       name,
       description,
       category,
       price,
       tags
    })



    
      
        window.location.href = '/'
   }

    return(
        <>
                <HeaderAdm/>

                <Container>
                    <div className="content">
                        
                     <ButtonText className="voltar" title="< voltar" onClick={handleBack}  />
                     
                     <h1>Adicionar Prato</h1>
                     <div className="capsula">
                        <div className="input-area">
                        <label htmlFor="imagem">Imagem do Prato</label>
                           <Input id="imagem" type="file"  icon={FiDownload} />
                        </div>

                        <div className="input-area aumenta">
                           <label htmlFor="prato">Nome</label>
                           <Input id="prato" type="text" placeholder="Ex: Nome do prato" onChange={e => setName(e.target.value)}/>
                        </div>

                        <div className="input-area">
                           <label htmlFor="categoria">Categoria</label>
                           <select id="categoria" type="option"> 
                              <option value="Refeicao">Refeição</option>
                              <option value="Sobremessa">Sobremessa</option>
                           </select>
                        </div>
                        </div>

                        <div className="capsula">
                        <div className="input-area aumenta">
                           <p>Ingredientes</p>
                           
                           <div className="ingredientes">

                              {
                                 tags.map((tag, index) => (
                                    <Ingrediente
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                    />
                                 ))
                              }

                              <Ingrediente
                                isNew
                                value={newTag}
                                placeholder="Nova Tag"
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}  />
                           </div>
                        </div>

                        <div className="input-area">
                           <label htmlFor="prato">Preço</label>
                           <Input id="prato" type="text" placeholder="R$ 00,00" onChange={e => setPrice(e.target.value)}/>
                        </div>
                        </div>


                        <div className="input-area">
                           <label htmlFor="prato">Descrição</label>
                           <textarea id="prato" type="text" onChange={e => setDescription(e.target.value)} placeholder="Fale brevemente sobre o prato, seus ingredientes e composições"/>
                        </div>
                    
                     
                     <Button title="Salvar Alterações" onClick={handleNewPrato}/>              
                    </div>
                
                <Rodape/>
                </Container>       
        </>

    )
}