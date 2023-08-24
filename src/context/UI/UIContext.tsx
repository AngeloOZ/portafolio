import { createContext, useContext } from 'react';


export interface UIContextProps {
    isDarkMode: boolean;

    toggleDarkMode: () => void;
}


export const UIContext = createContext({} as UIContextProps);

export function useUIContext() {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
}

