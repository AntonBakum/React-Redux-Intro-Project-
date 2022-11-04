import Box from '@mui/material/Box';
import HeaderContainer from '../ui/common/Header/HeaderContainer';
import MainContainer from '../ui/common/Main/MainContainer';
import SidebarContainer from '../ui/common/Sidebar/SidebarContainer';

const MainLayout = () => {
  return (
    <Box>
      <SidebarContainer />
      <HeaderContainer />
      <MainContainer />
    </Box>
  );
};

export default MainLayout;
