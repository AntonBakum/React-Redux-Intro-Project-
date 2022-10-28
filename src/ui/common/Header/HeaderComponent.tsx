import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { drawerWidth } from '../../../styles/sidebarStyle';
import { Props } from './HeaderContainer';

const HeaderComponent = (props: Props) => 
{
    return (
        <AppBar position= "static"
         sx = {{...(props.isOpened && {
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
                      ...(props.isOpened && { display: 'none' }),
                    }}
                    onClick = {props.handleSidebarClose}
                >
            <MenuIcon />
            </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {props.isOpened ? 'Sidebar is opened' : 'Sidebar is closed '}
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