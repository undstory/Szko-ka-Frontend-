import React from 'react';
import GlobalStyles from '../styles/globals';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/themes';

interface Props{
    children: React.ReactNode
}


const MainLayouts: React.FC <Props> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
            {children}
      </ThemeProvider>
    </>
  )
}

export default MainLayouts