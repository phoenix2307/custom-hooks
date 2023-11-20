import {useInput} from "../hooks/useInput";
import React from "react";

export const CustomInput = () => {

    const username = useInput('')
    const password = useInput('')
    return (
        <div>
            <input {...username} type="text" placeholder={'username'}/>
            <input {...password} type="password" placeholder={'password'}/>
        </div>
    )
}