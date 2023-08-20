import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
 
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

:root{
    font-size: 62.5% ;
}

body {
    background-color: ${(props) => props.theme.COLORS.BACKGROUND};
    color: ${(props) => props.theme.COLORS.WHITE};
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    }

label, input, :placeholder{
    font-family: 'Roboto', sans-serif;
    color:red;
    outline: none;
}

a{
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}
`