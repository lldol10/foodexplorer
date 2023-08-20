import styles, { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT };
    color: ${({theme}) => theme.COLORS.WHITE };

    
    border-radius: 4px;


    >input {
        height: 4.8rem;
        width: 100%;
        padding: 1.6rem;
        color: ${({theme}) => theme.COLORS.WHITE };
        background-color: transparent;
        border: 0;
        outline: 0;
        font-size: 1.6rem;

        &:placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300 };
        }


    }
    > svg {
            margin-left: 1.6rem;
            color:${({theme}) => theme.COLORS.GRAY_300 };
        }
`