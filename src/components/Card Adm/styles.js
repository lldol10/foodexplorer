import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 29rem;
    min-width: 18rem;
    margin: 0rem 2rem 0 0;
    background-color: black;
    padding: 2rem;
    position: relative;
    

    img{
        
        border-radius: 50%;
        width: 9rem;
        height: 9rem;
        cursor: pointer;
        alt: 'double click';
        
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

    p{
        font-size: 1.2rem;
        text-align: justify;
        
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

`