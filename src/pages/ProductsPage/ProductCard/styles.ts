import { SxProps } from '@mui/material';

export const mainCardStyle: SxProps = {
  maxWidth: 400,
};

export const cardMediaContainer: SxProps = {
  position: 'relative',
};

export const cardMediaChildContainer: SxProps = {
  position: 'absolute',
  padding: '10px',
};

export const productNameTypography: SxProps = {
  fontWeight: 'bolder',
};

export const productSaleAvatar: SxProps = {
  bgcolor: 'white',
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

export const productCardBadgeBox: SxProps = {
  marginBottom: '15px',
};

export const productCardBageAvatar: SxProps = {
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

export const productDateBox: SxProps = {
  fontStyle: 'italic',
};

export const productDescriptionHeader: SxProps = {
  fontWeight: 'bolder',
};

export const addToCartButton: SxProps = {
  backgroundColor: 'secondary.main',
  color: 'white',
  width: '170px',
  '&:hover': {
    backgroundColor: 'green',
  },
};

export const descriptionButton: SxProps = {
  backgroundColor: 'info.main',
  color: 'white',
  width: '170px',
  '&:hover': {
    backgroundColor: 'green',
  },
};

export const descriptionButtonItem: SxProps = {
  textAlign: 'end',
};
