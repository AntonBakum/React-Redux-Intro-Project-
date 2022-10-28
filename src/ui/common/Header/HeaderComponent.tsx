import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { toggleStatus } from '../../../features/opener/sidebarSlice';
import { drawerWidth } from '../../../styles/sidebarStyle';

/*This component uses Redux capabilities to access the storage (useSelector()), 
as well as to change the state of the application (useDispatch()). */

const HeaderComponent = () => 
{
    const isOpened = useSelector((state : RootState) => state.sidebar.open);
    const dispatch = useDispatch();
    const handleSidebarClose = () => {
        dispatch(toggleStatus(!isOpened));
    }
    return (
        <AppBar position= "static"
         sx = {{...(isOpened && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
          }),
        }
        }
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                      marginRight: '36px',
                      ...(isOpened && { display: 'none' }),
                    }}
                    onClick = {() => {handleSidebarClose()}}
                >
            <MenuIcon />
            </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {isOpened ? 'Sidebar is opened now' : 'Sidebar closed'}
                </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            </Toolbar>
      </AppBar>
    )
}
export default HeaderComponent;