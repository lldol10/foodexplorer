import {Container} from './styles.js'
import Logo from '../../assets/polygon_foot.png'

export function Rodape(){
    return (
        <Container>
            
                <div className='logo'>
                    <img src={Logo} alt="" />
                    <span>food explorer</span>
                </div>

                <span>
                © 2023 - Todos os direitos reservados.
                </span>

            
        </Container>
    )
}