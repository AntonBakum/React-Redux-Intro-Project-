import SidebarComponent from "./SidebarComponent"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import {RootState} from "../../../app/store";
import { toggleStatus } from "../../../features/opener/sidebarSlice";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Theme, useTheme } from '@mui/material/styles';

export interface Props {
    isOpened : boolean,
    handleSidebarOpen: () => void,
    theme: Theme,
    navigate: NavigateFunction,
}

const SidebarContainer = () => 
{
   const isOpened = useAppSelector((state: RootState) => state.sidebar.open)
   const theme = useTheme();
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const handleSidebarOpen = () => 
   {
      dispatch(toggleStatus(!isOpened));
   }
   return (
        <SidebarComponent isOpened = {isOpened} handleSidebarOpen = {handleSidebarOpen} theme={theme} navigate={navigate}/>
   )
}

export default SidebarContainer;