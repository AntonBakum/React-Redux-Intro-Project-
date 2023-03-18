import Box from '@mui/material/Box';
import { drawerWidth } from '../../../styles/sidebarStyle';
import { Outlet } from 'react-router-dom';
import { theme } from '../../../theme';

interface Props {
  isOpened: boolean;
}

const MainComponent = (props: Props) => {
  return (
    <Box
      sx={{
        marginLeft:"8%",
        ...(props.isOpened && {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }}
    >
      <Outlet />
    </Box>
  );
};
export default MainComponent;
