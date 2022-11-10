import React, {FC} from 'react';
import "./headerStyles.scss"
const Header:FC = () => {
    return (
        <div className="mainContainer">
            <div className="sourceName">HackerNews</div>
        </div>
    );
};

export default Header;