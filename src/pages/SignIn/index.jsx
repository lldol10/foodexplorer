import { useState } from 'react'
import {api} from '../../services/api'

import { useAuth } from '../../hooks/auth'
import {Container} from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import Logo from '../../assets/Polygon 1.svg'

import {Link} from 'react-router-dom'



export  function SignIn(){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

const {signIn} = useAuth()

function handleSignIn(){
  
  signIn({email, password})
  
}

  
  return (
    <Container>
      <main>
        
        <div className='titulo'>
          <img src={Logo} alt="logo do explorer" />
          <h1>food explorer</h1>
        </div>

        <section>
            <h1>Faça seu Login</h1>
            <div className='group'>
            <label htmlFor="email">Email</label>
            <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            id="email" 
            onChange = {e => setEmail(e.target.value)}
            />
            </div>

            <div className='group'>
            <label htmlFor="pass">Senha</label>
            <Input 
            placeholder="No minimo 6 caracteres"
            type="password" 
            id="pass"
            onChange = {e => setPassword(e.target.value)}

            />
            </div>

              <Button title="ENTRAR" onClick={handleSignIn} />

            <Link to="/signup">
              Criar uma Conta
            </Link>
        </section>

      </main>
    </Container>
    
  )

}