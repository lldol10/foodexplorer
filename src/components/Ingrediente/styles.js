import styled from 'styled-components'

export const Container = styled.div`
display: flex;
padding: 8px;
font-size: 1.8rem;
//background-color: red;



input{
   background-color: transparent;
   border: none;
   outline: none;
  // background-color: blue;
   width: 82px;
   color: white;
   display: flex;
   flex-wrap: wrap;
}

span, svg{
    color: white;
}

button{
    margin: none;
    border: none;
    background-color: transparent;

    svg{
        font-size: 2rem;
    }
}

.agrupar{
    background-color: ${(props) => props.isNew ? 'transparent' : '#918e8c'};
    border: ${(props) => props.isNew ? '2px dashed white' : 'none'};
    color: white;
    display: flex;
    gap: 1.2rem;
    align-items: center;
    border-radius: 6px;
    padding: 5px 1rem;
}



        /*MEDIA QUERIES */
        @media (max-width: 564px) {
  
            .agrupar{
                flex-wrap: wrap;
            }
}

`