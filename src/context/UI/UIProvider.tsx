
import { use, useEffect, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UiState {
    isDarkMode: boolean;
}

type Props = {
    children: React.ReactNode
}

const UI_INITIAL_STATE: UiState = {
    isDarkMode: false,
};

export const UIProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    useEffect(() => {
        validateTheme();
    }, []);

    const validateTheme = () => {
        const theme = localStorage.getItem('theme');
        if (!theme) return;

        if (theme === 'dark') {
            dispatch({ type: 'SET_STATE_DARK_MODE', payload: true });
        } else {
            dispatch({ type: 'SET_STATE_DARK_MODE', payload: false });
        }
    }


    const toggleDarkMode = () => {        
        localStorage.setItem('theme', !state.isDarkMode ? 'dark' : 'light');
        dispatch({ type: 'TOGGLE_DARK_MODE' });
    };

    return (
        <UIContext.Provider value={{
            ...state,

            toggleDarkMode,
        }}>
            {children}
        </UIContext.Provider>);
};