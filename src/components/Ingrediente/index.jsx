import {FiX, FiPlus} from 'react-icons/fi'


import { Container} from "./styles";

export function Ingrediente({isNew,value, title, onClick, ...rest}){
    return(
        <Container isNew ={isNew} {...rest} >

            <div className='agrupar'>
                <input type="text" value={value}  readOnly={!isNew} placeholder={isNew ? 'Adicionar': title} {...rest} />
           

            <button
            type='button'
            onClick={onClick}
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
            </div>

        </Container>
    )
}