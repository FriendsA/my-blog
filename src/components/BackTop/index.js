import React, { useEffect, useState } from 'react';
import './index.css';

const BackTop = () => {

    const [display, setDisplay] = useState(false);

    useEffect(() => {
        console.log("listener")
        function scrollHandle() {
            setTimeout(() => {
                setDisplay(window.scrollY > 200)
            }, 200);
        }
        window.addEventListener("scroll", scrollHandle, true);
        return window.removeEventListener("scroll", scrollHandle);
    }, [])

    function backTopHandle() {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        })
    }

    return display ? <div className="co-back-top" onClick={backTopHandle}></div> : null
}

export default BackTop;