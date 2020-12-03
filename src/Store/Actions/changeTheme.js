import React from 'react'

export const saveTheme = color =>{
    return ({
        type: "CHANGE_THEME",
        payload: {
            color
        }
    })
}