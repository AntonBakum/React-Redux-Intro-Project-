import  Box  from "@mui/material/Box";
import { drawerWidth } from "../../../styles/sidebarStyle";
import { Outlet } from "react-router-dom";
import { Props } from "./MainContainer";


/*This component uses Redux capabilities to access the storage (useSelector())*/

const MainComponent = (props: Props) => 
{
    return (
        <Box sx = {{
            ...(props.isOpened && {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
            }),
        }}>
            <Outlet/>
        </Box>
    )
}
export default MainComponent