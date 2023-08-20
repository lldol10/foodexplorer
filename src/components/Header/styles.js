import styled from 'styled-components'
export const Container = styled.header`
    grid-area: header;
    height: 11rem ;
    width: 100vw;
    border-bottom-width:1px;
    border-bottom-style: solid;
    background-color: #001119;
    display: flex;
    
    .logo{
        object-fit: cover;
        width: 29rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;
    }

    .header-mobile{
        width: 90%;
        display: flex;
        height: 3rem;
        align-items: center;
        justify-content: space-around;
        margin: 3rem 4rem 0;

        img{
            cursor: pointer;
            
        }

        .pedido{
            
            position: relative;
            
             p{
                position: absolute;
                top: -10px;
                right: -5px;
                color: white;
                font-size: 1rem;
               padding: 5px;
                background-color: red;
                text-align: center;
                
                border-radius: 50%;
            }
        }
        
    }


    .nav-elements-desktop{
        width: 100%;
        display: flex;
        height: 5rem;
        gap: 3rem;
        margin: 2rem 4rem;
        justify-content: space-around;
        align-items: center;

        button{
            width: 20rem;
        }
    }

    

    .some{
        display: none;
    }




        /*MEDIA QUERIES */
        @media (min-width: 1024px) {
  
           .header-mobile{
            display: none;
            
           }

           .nav-elements-desktop{
            display: flex;
            
            }
    }

    
`