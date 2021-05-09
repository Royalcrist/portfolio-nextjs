import React, { useState, useEffect } from "react";

export default function useScroll(initialValue) {
    const [value, setValue] = useState(initialValue);
    const [index, setIndex] = useState(initialValue);

    function handleScroll(e) {
        setIndex(
            Math.round((e.target.scrollTop / e.target.scrollHeight) * 100)
        );
    }

    useEffect(() => {
        if (index !== value) {
            setValue(index);
        }
    }, [index]);

    return {
        value,
        onScroll: handleScroll,
    };
}
