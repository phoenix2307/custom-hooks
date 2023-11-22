import {ChangeEvent, useCallback, useState} from "react";
import useDebounce from "../hooks/useDebounce";

export const SearchDebounce = () => {

    const [value, setValue] = useState('')
    const debouncedSearch: any = useDebounce(fetchSearch, 500)

    function fetchSearch(query: any) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        debouncedSearch(e.currentTarget.value)
    }

    return (
        <input  type="text" value={value} onChange={onChangeHandler}/>
    )
}