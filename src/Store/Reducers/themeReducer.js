import React from 'react'

let initState ={
    color: "#843bb5be"
}

export default function themeReducer(state, action){
    state = initState;
    // eslint-disable-next-line default-case
    switch(action.type){
        case "CHANGE_THEME":
            console.log('themeReducer: ', JSON.stringify(state));
            return Object.assign({}, state, {color: action.payload.color});
            default:
                return initState;
    }
}