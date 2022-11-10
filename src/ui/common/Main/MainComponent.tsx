import Box from '@mui/material/Box';
import { drawerWidth } from '../../../styles/sidebarStyle';
import { Outlet } from 'react-router-dom';

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
        }),
      }}
    >
      <Outlet />
    </Box>
  );
};
export default MainComponent;
