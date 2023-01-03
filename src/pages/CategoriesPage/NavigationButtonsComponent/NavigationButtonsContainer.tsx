import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import {
  toggleCreateModalStatus,
} from '../../../slices/modalWindowSlice';
import NavigationButtonsComponent from './NavigationButtonsComponent';

const NavigationButtonsContainer = () => {
  const dispatch = useAppDispatch();
  const createModalOpen = useAppSelector(
    (state: RootState) => state.modalWindow.createModalOpen,
  );
  return (
    <NavigationButtonsComponent
      onToggleCreateStatusClick={() =>
        dispatch(toggleCreateModalStatus(!createModalOpen))
      }
    />
  );
};

export default NavigationButtonsContainer;
