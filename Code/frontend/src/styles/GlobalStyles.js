import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       list-style: none;   
    }

    :root{
        --primary-color: #0B2447;
        --primary-color2: 'color: rgba(34, 34, 96, .6)';
        --primary-color3: 'color: rgba(34, 34, 96, .4)';
        --color-cyan: #A5D7E8;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
        
    }

    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: flex;
        color: white;
    }
    .sidebar{
    height: 100%;
    width: 250px;
    background-color: #0B2447;
    .Navbar{    
    background-color: #0B2447;    
    width: 100%;
    height: 80px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
}
}
`;