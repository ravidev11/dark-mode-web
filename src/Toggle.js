import React from 'react';
import styled from 'styled-components';

let Sun, Moon;

Sun = Moon = styled.svg`
  position: fixed;
  top: 8rem;
  right: 7rem;
  
  transition: all .5s linear;
`;

export const Toggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <div onClick={toggleTheme}>
      { theme === 'light' ? <Moon xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 22 22" fill="full" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bi bi-moon-fill"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></Moon>
      : 
      <Sun xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 22 22" fill="none" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon color-info"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></Sun>
       }
    </div>
  )
}