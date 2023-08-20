import styled from 'styled-components'

export const Container = styled.div`

height: 100%;
width: 100vw;
background-color: #1E1E1E;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
margin: 0 auto;

.content{
    height: 67rem;
    width: 31rem;
    margin: 0 auto;
    padding: 2rem 0;

    button:nth-child(3){
        margin-top: 2rem;
    }

   .dish{
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;

    button{
        align-self: flex-start;
        font-size: 2.4rem;
        font-family: 'Poppins';
        font-weight: 500;
    }

    img{
        width: 23rem;
        height: 23rem;
        border-radius: 50%;
    }

   }


  
}

.dish-info{
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;
    font-size: 1.4rem;
    text-align: center;
    padding: 3rem;


    h2{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-style: bold;
        
    }

}

.tags{
    min-height:5rem;
    padding: 1rem 4rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}




        /*MEDIA QUERIES */
        @media (min-width: 1024px) {
            .content{
                display: flex;
                width: 100%;
                margin: 0 auto;
                padding: 8rem 15rem;
                gap: 12rem;
                overflow-x: hidden;
            }

            .dish{
          
                width: 30%;
            }

            .second-coll{
                display: flex;
                flex-direction: column;
                width: 40%;
                padding-top: 9.5rem;

            }
            .dish-info{
                display: flex;
                flex-direction: column;

                align-items: flex-start;
                text-align: left;
                margin: 0;
                padding: 0;
                      
            }

            .tags{
             
              align-items: left;
                
              margin-top: 2rem;
              padding: 0;

              span{
                height: 23px;
              }
            }
        


            .pedir{
                width: 22rem;
                padding: 0;
                margin-top: 2rem;
                > button{
                    padding:0;
                }

            }

         

}

`