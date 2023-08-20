import { useState } from 'react'

import {api} from '../../services/api'
import {Container} from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import Logo from '../../assets/Polygon 1.svg'

import {Link, useNavigate} from 'react-router-dom'



export  function SignUp(){

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    console.log(name, email, password)
    if(!name || !email || !password){
      return alert("preencha todos os campos")
    }

    
    api.post("/users", {name, email, password})
    .then(() => {
      alert("Cadastrado com sucesso")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possivel cadastrar")
      }
    })
  }

  return (
    <Container>
      <main>
        
        <div className='titulo'>
          <img src={Logo} alt="logo do explorer" />
          <h1>food explorer</h1>
        </div>

        <section>
            <h1>Crie sua conta</h1>

            <div className='group'>
            <label htmlFor="email">Seu nome</label>
            <Input 
            placeholder="Exemplo: Maria da Silva"
            type="text"
            id="email" 
            onChange={e => setName(e.target.value) }
            />
            </div>

            <div className='group'>
            <label htmlFor="email">Email</label>
            <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            id="email" 
            onChange={e => setEmail(e.target.value) }
            />
            </div>

            <div className='group'>
            <label htmlFor="pass">Senha</label>
            <Input 
            placeholder="No minimo 6 caracteres"
            type="password" 
            id="pass"
            onChange={e => setPassword(e.target.value) }
            />
            </div>

            <Button title="Criar conta" onClick={handleSignUp}/>

            <Link to="/">
              Já tenho uma conta
            </Link>
        </section>

      </main>
    </Container>
    
  )

}