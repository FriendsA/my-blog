import React, { useEffect, useState } from 'react';
import './index.css';
let timer = null;
let flag = true;

const BackTop = () => {

    const [display, setDisplay] = useState(false);

    useEffect(() => {
        function scrollHandle() {
            timer = setTimeout(() => {
                if (flag) {
                    setDisplay(window.scrollY > 200)
                }
            }, 200);
        }
        window.addEventListener("scroll", scrollHandle, true);
        return () => {
            window.removeEventListener("scroll", scrollHandle), true;
            flag = false;
            clearTimeout(timer);
        };
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