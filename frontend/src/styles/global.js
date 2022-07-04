import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `


*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:  border-box;
}

body{
    font-family: Arial, Helvetica, sans-serif ;
    font-size: 14px;
    background: #7159c1;
    text-rendering:  optimizeLegibility; //Provê informações para o mecanismo de renderização para otimizar no momento em que ele renderiza texto
    -webkit-font-smoothing: antialiased;
}

html, body, #root{
    height: 100% ; //Força que a tela toda seja ocupada 
}


`;