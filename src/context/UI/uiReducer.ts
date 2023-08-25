import { UiState } from ".";


type UIActionType =
    | { type: 'TOGGLE_DARK_MODE' }
    | { type: 'SET_STATE_DARK_MODE', payload: boolean }


export const uiReducer = (state: UiState, action: UIActionType): UiState => {

    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            }
        case 'SET_STATE_DARK_MODE':
            return {
                ...state,
                isDarkMode: action.payload
            }
        default:
            return state;
    }
}