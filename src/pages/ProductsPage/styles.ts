import { SxProps } from '@mui/material';

export const mainCardStyle: SxProps = {
  maxWidth: '28vw',
  height: '75vh',
};

export const cardMediaContainer: SxProps = {
  position: 'relative',
};

export const cardMediaChildContainer: SxProps = {
  position: 'absolute',
  padding: '10px',
};

export const productName: SxProps = {
  fontWeight: 'bolder',
};

export const productSaleAvatar: SxProps = {
  backgroundColor: 'white',
  color: 'black',
  width: 45,
  height: 45,
  border: 'solid black',
};

export const productPriceItem: SxProps = {
  fontStyle: 'italic',
  fontWeight: 'bold',
  fontSize: '25px',
};

export const productCardBadge: SxProps = {
  marginBottom: '15px',
};

export const productCardBadgeAvatar: SxProps = {
  width: 30,
  height: 30,
};

export const addToFavouriteButton: SxProps = {
  color: 'white',
  backgroundColor: '#F04254',
};

export const shareButton: SxProps = {
  color: '#394254',
  backgroundColor: 'white',
};

export const productDate: SxProps = {
  fontStyle: 'italic',
};

export const productDescriptionHeader: SxProps = {
  fontWeight: 'bolder',
};

export const addToCartButton: SxProps = {
  width: '185px',
  backgroundColor: '#D81E5B',
  color: '#EFF5F5',
  marginRight: '1vw',
  '&:hover': {
    color: '#D81E5B',
    backgroundColor: 'white',
    border: '3px solid #D81E5B',
  },
};
export const descriptionContainer: SxProps = {
  height: 100,
};
export const descriptionButton: SxProps = {
  width: '185px',
  backgroundColor: 'black',
  color: '#EFF5F5',
  marginRight: '1vw',
  '&:hover': {
    color: 'black',
    backgroundColor: 'white',
    border: '3px solid black',
  },
};

export const descriptionButtonItem: SxProps = {
  textAlign: 'end',
};


export const productsListWrapper: SxProps = {
  marginTop: '3vh',
};
export * as styles from './styles';