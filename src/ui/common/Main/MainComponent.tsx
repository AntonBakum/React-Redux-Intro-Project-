import  Box  from "@mui/material/Box";
import { drawerWidth } from "../../../styles/sidebarStyle";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";


const MainComponent = () => 
{
    const isOpened = useSelector((state: RootState) => state.sidebar.open);
    return (
        <Box sx = {{
            ...(isOpened && {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
            }),
        }}>
            <Outlet/>
        </Box>
    )
}
export default MainComponent