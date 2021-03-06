import React from 'react';
import Typography from "@material-ui/core/Typography";
import useStyle from './styles'
import {useMediaQuery, useTheme} from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import GroupIcon from '@material-ui/icons/Group';
import {toggleDrawer, toggleLeftDrawer, useLayoutDispatch} from "../../context/LayoutContext";

const Header = ({title, icon}) => {
    const theme = useTheme()
    // responsive for phone and tablet
    const isTabletSize = useMediaQuery(theme.breakpoints.down("sm"))
    const isPhoneSize = useMediaQuery(theme.breakpoints.down("xs"))

    const classes = useStyle();
    const layoutDispatch = useLayoutDispatch();

    const handleRightToggle =()=>toggleDrawer(layoutDispatch)
    const handleLeftToggle =()=>toggleLeftDrawer(layoutDispatch)

    return (
        <div className={classes.header}>
            {/*just show icon for tablet drawer*/}
            {isTabletSize && (
                <iconButton onClick={handleRightToggle} className={classes.moreMenu} >
                <MenuRoundedIcon/>
            </iconButton>
            )}
            {icon}
            <Typography className={classes.headerTitle}>
                {title}
            </Typography>
             {/*just show icon for phone  drawer*/}
            {isPhoneSize && (
                <iconButton onClick={handleLeftToggle} className={classes.leftMenu}>
                    <GroupIcon/>
                </iconButton>
            )}
        </div>
    );
};

export default Header;