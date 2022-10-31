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
import { sideBarItems } from '../../../constants/sidebarItems';
import { DrawerHeader } from './SidebarHeader';
import { NavigateFunction} from 'react-router-dom';
import { Theme } from '@mui/material/styles';
 
interface Props {
  isOpened : boolean,
  handleSidebarOpen: () => void,
  theme: Theme,
  navigate: NavigateFunction,
}

const SidebarComponent = (props: Props) => 
{
   return (
      <Drawer
        sx={sidebarStyle}
        variant= {props.isOpened ? "permanent" : "persistent"}
        anchor="left"
      >
      <DrawerHeader>
         <IconButton onClick = {props.handleSidebarOpen}>
             {props.theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
         </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {sideBarItems.map((item, id) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => {props.navigate(item.route)}}>
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