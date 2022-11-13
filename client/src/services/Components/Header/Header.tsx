import React, {FC} from 'react';
import headerStyles from "./headerStyles.module.scss"
import {useHistory} from "react-router-dom";
const Header:FC = () => {
    const history = useHistory();
    return (
        <div className={headerStyles.mainContainer}>
            <div className={headerStyles.sourceName} onClick={(e:React.MouseEvent<HTMLDivElement>):void=>{
                history.replace("/")
            }}>HackerNews</div>
        </div>
    );
};

export default Header;