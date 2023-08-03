import { UiState } from ".";


type UIActionType =
    | { type: 'TOGGLE_DARK_MODE' }


export const uiReducer = (state: UiState, action: UIActionType): UiState => {

    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            }
        default:
            return state;
    }
}