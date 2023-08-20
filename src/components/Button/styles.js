import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;

    background-color: ${(props) => props.theme.COLORS.BACKGROUND_BTN_RED};
    color: ${(props) => props.theme.COLORS.WHITE};

    height: 4.8rem;
    border: 0;
    padding: 0 1.6rem;

    
    border-radius: 4px;

    font-weight: 600;
   

    &:disabled{
        opacity:0.5;
    }
`