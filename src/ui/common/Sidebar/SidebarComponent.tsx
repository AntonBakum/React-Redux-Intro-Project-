import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import AdbIcon from '@mui/icons-material/Adb';
import sidebarStyle  from '../../../styles/sidebarStyle';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { sideBarItems } from '../../../constants/sidebarItems';
import { DrawerHeader } from './SidebarHeader';
import { toggleStatus } from '../../../features/opener/sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

const SidebarComponent = () => 
{
   const isOpened = useSelector((state: RootState) => state.sidebar.open)
   const theme = useTheme();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleSidebarOpen = () => 
   {
      dispatch(toggleStatus(!isOpened));
   }
   return (
      <Drawer
        sx={sidebarStyle}
        variant= {isOpened ? "permanent" : "persistent"}
        anchor="left"
      >
      <DrawerHeader>
         <IconButton onClick = {() => handleSidebarOpen()}>
             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
         </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {sideBarItems.map((item, id) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => {navigate(item.route)}}>
              <ListItemIcon>
                {item.id === 1 ? <HomeIcon/> : <AdbIcon/>}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
   )
}

export default SidebarComponent;