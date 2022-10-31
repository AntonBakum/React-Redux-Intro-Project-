import SidebarComponent from "./SidebarComponent";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { toggleStatus } from "../../../features/opener/sidebarSlice";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const SidebarContainer = () => {
  const isOpened = useAppSelector((state: RootState) => state.sidebar.open);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSidebarOpen = () => {
    dispatch(toggleStatus(!isOpened));
  };
  return (
    <SidebarComponent
      isOpened={isOpened}
      handleSidebarOpen={handleSidebarOpen}
      theme={theme}
      navigate={navigate}
    />
  );
};

export default SidebarContainer;
