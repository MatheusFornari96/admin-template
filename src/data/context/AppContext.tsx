import { createContext } from "react";

type Tema = 'dark' | '';

interface AppContextProps {
  tema: Tema;
}

const AppContext = createContext<AppContextProps>({
  tema: null
})

export function AppProvider(props) {

  return (
    <AppContext.Provider value={{ tema: 'light' }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext