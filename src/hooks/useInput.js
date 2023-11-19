import {useState} from "react";

export const useInput = (e) => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e) => {
        setValue(e.currentTarget.value)
    }

    return {value: value, onChange: onChangeHandler}
}