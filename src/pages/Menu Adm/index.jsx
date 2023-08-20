import Sair from '../../assets/Close.svg'
import {FiSearch} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import {Container} from './styles'
import {useAuth} from '../../hooks/auth'
import { NovoPrato } from '../Novo Prato Adm'
import { Session } from '../../components/Session'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import{CardAdm} from '../../components/Card Adm'

export function MenuAdm(){

    const [pratos, setPratos] = useState([])
    const [search, setSearch] = useState("")
    const [tags, setTags] = useState("")
    const {signOut} = useAuth()



    function NovoPrato(){
        window.location.href = '/novoprato'
      
    }

    useEffect(() => {
        async function fetchPratos(){
            const response = await api.get("/prato")
            setPratos(response.data)
            console.log(response)
        }

        fetchPratos()
    }, [])

    useEffect(() => {
        async function fetchPratos(){
            const response = await api.get(`/prato?name=${search}`)
            setPratos(response.data)
            
        }

        fetchPratos()
    }, [search])
    
    return(
        <Container>
            <header>
                <button>
                     <img src={Sair} alt="" onClick={signOut}/>
                </button>
                
                <h2>Menu</h2>
            </header>
            
            <div className='menu'>
                <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" onChange={(e) => setSearch(e.target.value)}/>
                <ButtonText title="Novo Prato" onClick={NovoPrato} />
                <ButtonText title="Sair" onClick={signOut}/>
            </div>

            <div className='content'>
                <Session title="Pratos Buscados">
                    <div className='carrossel'>
                        {
                             pratos.map((prato) => {
                                 return (
                                     <CardAdm
                                         key={String(prato.id)}
                                         imagem={`${api.defaults.baseURL}/files/${prato.imagem}`}
                                         name={prato.name}
                                         price={prato.price}
                                         onClick={() => handleDetails(prato.id)}
                                     />
                                 )

                             })
                        }
                    </div>


                </Session>
            </div>
            
        </Container>
    )
}