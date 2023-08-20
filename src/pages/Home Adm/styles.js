import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;

  
    display: grid;

    grid-template-rows: 11rem 12rem auto ;

    grid-template-areas:
    "header"
    "session"
    "content"
    ;

    .carrossel{
        display: flex;
        overflow-x: auto;
    }


    /*MEDIA QUERIES */

    @media (min-width: 1024px) {
        h1{
            font-size: 3rem;
        }

        p{
            font-size: 1.6rem;
        }
    }
`





