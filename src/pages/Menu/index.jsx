import Sair from '../../assets/Close.svg'
import {FiSearch} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import {Container} from './styles'
import {useAuth} from '../../hooks/auth'
import { Card } from '../../components/Card'
import { Session } from '../../components/Session'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Menu(){
    const [search, setSearch] = useState("")
    const [pratos, setPratos] = useState([])
    const {signOut} = useAuth()
    const navigate = useNavigate()

    function handleDetails(id) {
        navigate(`/prato/${id}`);
      }

    useEffect(() => {
        async function fetchPratos() {
            const response = await api.get("/prato");
            setPratos(response.data);
            
          }
      
          fetchPratos();
    }, [])

    useEffect(() => {
        async function fetchPratos() {
            const response = await api.get(`/prato?name=${search}`);
            setPratos(response.data);
            
          }
      
          fetchPratos();
    }, [search])
    return(
        <Container>
            <header>
                <button onClick={Gotomenu}>
                     <img src={Sair} alt="" />
                </button>
                
                <h2>Menu</h2>
            </header>
            
            <div>
                <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" onChange={(e) => setSearch(e.target.value)}/>
                <ButtonText title="Sair" onClick={signOut}/>
            </div>
            
            


            <div className='content'>
            <Session  title="Pratos Buscados">
                <div className='carrossel'>
                {
                    pratos.map((prato) => {
                        return(
                            <Card
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

    function Gotomenu(){
        window.location.href = "/"
    }
}