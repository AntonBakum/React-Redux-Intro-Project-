import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import MainComponent from "./MainComponent"

export interface Props
{
    isOpened: boolean,
}
const MainContainer = () =>
{
    const isOpened = useAppSelector((state: RootState) => state.sidebar.open);
    return (
        <MainComponent isOpened = {isOpened}/>
    )
}

export default MainContainer;