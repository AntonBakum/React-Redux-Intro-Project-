import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { toggleStatus } from '../../../slices/sidebarSlice';
import HeaderComponent from './HeaderComponent';

const HeaderContainer = () => {
  const isOpened = useAppSelector((state: RootState) => state.sidebar.open);
  const dispatch = useAppDispatch();
  const handleSidebarClose = () => {
    dispatch(toggleStatus(!isOpened));
  };
  return (
    <HeaderComponent
      handleSidebarClose={handleSidebarClose}
      isOpened={isOpened}
    />
  );
};

export default HeaderContainer;
