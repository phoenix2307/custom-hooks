import {useEffect, useState} from "react";

export const useHover = (ref) => {
    const [isHovering, setHovering] = useState(false)
    const on = () => setHovering(true)
    const off = () => setHovering(false)

    useEffect(() => {
        // перевірити на наявність ref
        if (!ref) {
            return;
        }

        const node = ref.current
        node.addEventListener('mouseenter', on)
        node.addEventListener('mousemove', on)
        node.addEventListener('mouseleave', off)

        // при розмонтуванні компонента видалити слухачів
        return function(){
            node.removeEventListener('mouseenter', on)
            node.removeEventListener('mousemove', on)
            node.removeEventListener('mouseleave', off)
        }

    }, [])

    return isHovering
}