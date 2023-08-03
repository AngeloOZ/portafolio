
import { useReducer } from 'react';
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

    const toggleDarkMode = () => {
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