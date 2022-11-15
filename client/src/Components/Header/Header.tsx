import React, {FC} from 'react';
import headerStyles from "./headerStyles.module.scss"
import {useHistory} from "react-router-dom";
import {clearSecondaryComments} from "../../Services/actions/componentsActions";
import {useDispatch} from "../../utils/Types/store";

const Header: FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div className={headerStyles.mainContainer}>
            <div className={headerStyles.sourceName} onClick={(e: React.MouseEvent<HTMLDivElement>): void => {
                dispatch(clearSecondaryComments());
                history.replace("/")
            }}>HackerNews
            </div>
        </div>
    );
};

export default Header;