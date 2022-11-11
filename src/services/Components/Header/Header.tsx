import React, {FC} from 'react';
import "./headerStyles.scss"
import {useHistory} from "react-router-dom";
const Header:FC = () => {
    const history = useHistory();
    return (
        <div className="mainContainer">
            <div className="sourceName" onClick={(e:React.MouseEvent<HTMLDivElement>):void=>{
                history.replace("/")
            }}>HackerNews</div>
        </div>
    );
};

export default Header;