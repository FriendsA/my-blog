import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
    return (
        <div className="co-header">
            <Link className="co-header-logo" to="/">CORAZON</Link>
            <ul>
                <Link target="_blank" to="/#article">文章</Link>
                <Link target="_blank" to="/#message">留言</Link>
            </ul>
        </div>
    )
}

export default Header;