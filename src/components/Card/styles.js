import styled from 'styled-components'

export const Container = styled.div`
    &:hover{
        animation: shake 0.5s linear;
   
    }
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 29rem;
    min-width: 21rem;
    margin: 0rem 2rem 0 0;
    background-color: black;
    padding: 2rem;
    position: relative;
    transition: all 3s ease-in-out;

    .kvBuxt:hover{
        background-color: red;
    }
    

    img{
        
        border-radius: 50%;
        width: 9rem;
        height: 9rem;

        &:hover{cursor: pointer;}
        
    }

    .favorito{
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 2rem;
        right: 2rem;

        svg{
            height: 2rem;
            width: 2rem;
            cursor: pointer;
        }
    }

    .quantidade{
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 2rem;
        justify-content: center;

        svg{
            cursor: pointer;
        }
    }

    @keyframes shake {
        0%{
            transform: translatey(-20px);
        }
        100%{
            transform: translatey(0px);
        }
    }


  

`

