import React, { useEffect } from 'react';

const RED = '#ff0000';
const BLUE = "#0000ff";
const PURPLE = "#9d56af";

export default function Footer(props) {

    const submitThemeColor = (color) => {
        if (color) {
            console.log('handleChangeTheme');
            props.saveColorTheme(color);
        }
    }

    useEffect(() =>{
        console.log("UNSAFE_componentWillReceiveProps: " + JSON.stringify(props));
        document.documentElement.style.setProperty("--main-color", props.themeColor.color);
    }, [props])

    return (
        <div className="footer" >
            <div className="vertical-center">
                <span id="span">Choose Theme </span>
                <button onClick={() => submitThemeColor(RED)} className="dot red" />
                <button onClick={() => submitThemeColor(BLUE)} className="dot blue" />
                <button onClick={() => submitThemeColor(PURPLE)} className="dot purple" />
            </div>
        </div>
    );
}