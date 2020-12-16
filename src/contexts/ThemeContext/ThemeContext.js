import React, { useState, createContext } from 'react';

const { Provider, Consumer } = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({ theme: 'DAY' });

  return <Provider value={{ theme, setTheme }}>{props.children}</Provider>;
};

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
