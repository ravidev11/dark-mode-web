import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
   max-width:120%;
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
  }
  p {
    line-height: 1.4rem;
  }
  .btn-primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    padding:2px;
    width:100px;
    text-align:center;
    height:40px;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .5s linear;
  }
  .btn-info{
    background: ${({ theme }) => theme.info};
    color: ${({ theme }) => theme.body};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    padding:2px;
    width:100px;
    height:40px;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .5s linear;
  }
  .feather{
    background: ${({ theme }) => theme.feather};
    color: ${({ theme }) => theme.feather};
    
    border-left:7px solid black;
    border-right:7px solid black;
    
    
    background-position:center;


  }
  .form{
    background: ${({ theme }) => theme.form};
    color: ${({ theme }) => theme.form};
    
  }
  .Name{
    
    color: ${({ theme }) => theme.Name};
  }
  .heading{
    
    color: ${({ theme }) => theme.heading};
  }
  
  }
`;


export const lightTheme = {
    body: '#edebeb',
  text: '#6f6f6f',
  primary: '#8B008B',
  info:"#FF00FF",
  heading:"#211f21"
};

export const darkTheme = {
  body: '#121212',
  text: '#fff',
  primary: '#b763db',
  info:"#0ebfc2",
  feather:'#FFA500',
  form:"#453f43",
  
  heading:"#b763db"
};