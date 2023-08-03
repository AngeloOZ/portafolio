import { createContext } from 'react';


export interface UIContextProps {
    isDarkMode: boolean;

    toggleDarkMode: () => void;
}


export const UIContext = createContext({} as UIContextProps);