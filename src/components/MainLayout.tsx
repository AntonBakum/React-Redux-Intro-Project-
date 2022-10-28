import HeaderComponent from "../ui/common/Header/HeaderComponent";
import MainComponent from "../ui/common/Main/MainComponent";
import SidebarComponent from "../ui/common/Sidebar/SidebarComponent";

export default function MainLayout()
{
   
    return (
        <>
            <SidebarComponent/>
            <HeaderComponent/>
            <MainComponent/>
        </>
    )
}