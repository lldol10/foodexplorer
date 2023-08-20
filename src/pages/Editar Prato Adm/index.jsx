import { Container } from "./styles";
import {FiDownload} from 'react-icons/fi'
import {HeaderAdm} from './../../components/Header Adm'
import { Button } from "../../components/Button";
import {Rodape} from './../../components/Rodape'
import {ButtonText} from './../../components/ButtonText'
import { Input } from "../../components/Input";
import { Ingrediente } from "../../components/Ingrediente";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";




export function EditarPrato(){
   
const [data, setData] = useState("")
const [tags, setTags] = useState([])
const [newTag, setNewTag] = useState([])
const [imagem, setImagem] = useState(null)
const [imagemFile, setImagemFile] = useState(null)
const params = useParams()
const navigate = useNavigate()

const [name, setName] = useState("")
const [description, setDescription] = useState("")

const element = document.querySelector('#categoria')


const [price, setPrice] = useState("")

function handleRemoveTag(deleted){

   
   setTags(prevState => prevState.filter(tag => tag !== deleted))
   
  
}

function handleAddTag(tagDeleted){
   console.log(tags)
   setTags(prevState => [...prevState, newTag])
  setNewTag("")
  
  
}
async function handleAvatar(event){
   const file = event.target.files[0]
   console.log(file)
   setImagemFile(file)
   

   const imagePreview = URL.createObjectURL(file)
   setImagem(imagePreview)
    
      
    const fileUploadForm = new FormData()
       fileUploadForm.append("avatar", file)
       const response = await api.patch(`/prato/avatar/${params.id}`, fileUploadForm)
      console.log(imagemFile)
      console.log(response.data)
      
}


function handleBack(){
   navigate("/")
}

async function alterarPrato(){
   
   const category = element.value
   
   const data = {
      name,
      description,
      category,
      price,
      tags
   }
   await api.put(`/prato/${params.id}`, data)
handleBack()
   
}

async function deletedPrato() {
   const confirm = window.confirm("Deseja realmente excluir a nota?")

   if(confirm){
      await api.delete(`/prato/${params.id}`)
      navigate('/')
   }
}

useEffect(() => {
   async function fetchPrato(){
      const response = await api.get(`/prato/${params.id}`)
      setData(response.data)
      setTags(response.data.tags.map(tag => {
         return (
            
            String(tag.id),
            tag.name
         )
        
      }))  
   }

   fetchPrato()
}, [])

   
    return(
        <>
                <HeaderAdm/>

                <Container>
                    <div className="content">
                        
                     <ButtonText className="voltar" onClick={handleBack} title="< voltar" />
                     
                     <h1>Editar Prato</h1>
                     <div className="capsula">
                        {/* <div className="input-area">
                           <p>Imagem do prato</p>
                           <label className="flexivel" htmlFor="imagem">                         
                           <FiDownload/>
                           <input id="imagem" type="file" /> 
                           <p>Selecione imagem</p>
                           </label>  
                        </div> */}

                        <div className="input-area aumenta">
                           <label htmlFor="imagem">Imagem do Prato</label>
                           <Input id="avatar" type="file"  icon={FiDownload} onChange={handleAvatar}/>
                        </div>

                        <div className="input-area aumenta">
                           <label htmlFor="prato">Nome</label>
                           <Input id="prato" type="text" placeholder= {data.name} onChange={e => setName(e.target.value)}/>
                        </div>

                        <div className="input-area">
                           <label htmlFor="categoria">Categoria</label>
                           <select id="categoria" type="option" > 
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
                                 tags &&
                                 tags.map((tag) => (
                                    <Ingrediente
                                    key={String(tag.id)}
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
                              onClick={handleAddTag}  
                              
                              />
                            </div>
                           
                        </div>

                        <div className="input-area">
                           <label htmlFor="prato">Preço</label>
                           <Input id="prato" type="text" placeholder={data.price} onChange={e => setPrice(e.target.value)}/>
                        </div>
                        </div>


                        <div className="input-area">
                           <label htmlFor="prato">Descrição</label>
                           <textarea id="prato" type="text" placeholder={data.description} onChange={e => setDescription(e.target.value)}/>
                        </div>
                    
                        <div className="btn-padrao">
                            <Button title="Excluir prato" onClick={() => deletedPrato()}/>              
                            <Button title="Salvar Alterações" onClick={alterarPrato}/>
                        </div>
                     
                                   
                    </div>
                
                <Rodape/>
                </Container>       
        </>

    )
}