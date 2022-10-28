import HeaderContainer from "../ui/common/Header/HeaderContainer";
import MainContainer from "../ui/common/Main/MainContainer";
import SidebarContainer from "../ui/common/Sidebar/SidebarContainer";

const MainLayout = () =>
{
    return (
        <>
            <SidebarContainer/>
            <HeaderContainer/>
            <MainContainer/>
        </>
    )
}

export default MainLayout;