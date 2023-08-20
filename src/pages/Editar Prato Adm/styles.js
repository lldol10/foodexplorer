import styled from 'styled-components'

export const Container = styled.div`

height: 100vh;
width: 100vw;
background-color: #000a0f;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));


.content{
    width: 90%;

    padding: 4rem 7rem;
    margin: 0 auto;

    h1{
        margin: 2rem 0 3rem;
        font-size: 4rem;
    }

    select{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
        border: none;
        height: 4.8rem;
        padding: 1rem;
        color: ${({theme}) => theme.COLORS.GRAY_300 };
        font-size: 1.7rem;
        outline: none;
    }

    .btn-padrao{
        display: inline-flex;
        width: 100%;
        gap: 4rem;
    }

    .btn-padrao button:nth-child(1){
        background-color: #0D161B;
    }
}

.voltar{
    
    text-align: center;
    font-weight: bold;
    font-size: 2.5rem;
}

.input-area{
 
    display: flex;
    gap: 1rem;
    flex-direction: column;
    
    margin-bottom: 3rem;

    > p, label{
        font-size: 1.6rem;
    }

    >input, textarea{
        background-color:  ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
        border: none;
        height: 1.8rem;
        border-radius: 4px;
        padding: 1.5rem;
    }

    textarea{
        height: 12rem;
        resize: none;
        overflow: hidden;
    }


    .flexivel{
        display: flex;
        align-items: center;
        gap: 1rem;

        > svg{
            font-size: 2rem;
        }

        >input{
            display: none;
        }

    }

    #prato{
        color: white;
    }

    .ingredientes{
        background-color:  ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
        min-height: 4rem;
        display: flex;
    
        span{
        font-size: 1.4rem;
    }

    }

}





        /*MEDIA QUERIES */
        @media (min-width: 1024px) {
            .content{
                display: flex;
                flex-direction: column;
                width: 100%;
                margin: 0 auto;
                padding: 8rem 15rem;
                gap: 1rem;
                overflow-x: hidden;

                .btn-padrao button{
                    width: 30%;
                }
                .btn-padrao{
                    width: 100%;
                    display: flex;
                    justify-content: end;
                    
                }

            }

            .capsula .aumenta {
                width: 80%;
            }

            .capsula{   
        display: flex;
        gap: 2rem;
        
    }

}

@media (max-width: 564px) {
  
  .ingredientes{
      flex-wrap: wrap;
  }
}

`