import {useRef} from "react";
import {useHover} from "../hooks/useHover";

export const Hover = () => {

    const ref: any = useRef()
    const isHovering = useHover(ref)
    console.log(isHovering)
    return (

        <div ref={ref} style={{width: '200px',
            height: '200px',
            backgroundColor: isHovering ? 'green' : 'red'}}>

        </div>
    )
}