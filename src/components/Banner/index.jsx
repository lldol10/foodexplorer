import { Container } from "./styles";
import Bolinhos from "../../assets/pngegg 2.png"

export function Banner(){
    return (
        <Container>
             <img src={Bolinhos} alt="" />
             
            <div className="text-banner">
                         <h1>Sabores Inigualaveis</h1>
                         <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
            
        
            
            
            
        </Container>
    )
}