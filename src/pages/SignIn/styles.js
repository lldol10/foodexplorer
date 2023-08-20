import styled from 'styled-components'

export const Container = styled.div`
    
    

    >main{
        width: 80%;
        padding: 1.6rem;
        margin: 5rem auto;
        text-align: center;
        overflow-y: hidden;
       

    .titulo{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 7.3rem;
    font-size: 1.8rem;
    font-weight: 700;
    }



    .group{
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: start;
        font-size: 1.6rem;
    }

    .group:nth-child(3){
        margin-top: 3rem;
    }

    button{
        margin: 2rem 0;
    }

    section h1{
        display: none;
    }
   
    }

    a{
        color: white;
        margin-top: 20px;
        font-size: 1.3rem;
    }


    /*MEDIA QUERIES */

    @media (min-width: 1024px) {
        >main {

            display: flex;
            gap: 30rem;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            width: 100%;

            h1{
                font-family: 'Poppins', sans-serif;
                font-size: 2rem;
                font-weight: 500;
            }
            
            
            

            >section {
                min-width: 7rem;
                background-color:#001119;
                border-radius: 1.6rem;
                padding: 6rem;
                
                >div:nth-child(2){
                    margin-top: 2.5rem;
                }

                h1{
                    display: block;
                }

            
             }



             .titulo{
        
                img{
                    width: 4.5rem;
                }

                h1{
                    font-size: 4rem;
                    
                    font-weight: 700;
                }
             }

             

            

            
        }
    }

`