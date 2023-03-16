import {createContext, useReducer} from 'react';

export const themeContext = createContext();

const initialState ={darkMode : false};

const themeReducer = (state, action) => {
    switch(action.type){
        case 'toggle':
            return {darkMode : !state.darkMode};
        default:
            return state;

    }
}
// Here ThemeProvider must start with capital letter
export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return (
        <themeContext.Provider value = {{ state, dispatch }}>
            {props.children}
        </themeContext.Provider>
    );
};