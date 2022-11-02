import Button from '@mui/material/Button';


interface Props {
  getProductsClick: () => void;
  products: any;
  productIds: number[];
}

export default function PageOne(props: Props) {
  return (
    <>
      <h1>Welcome to the first page</h1>
      <Button variant="contained" onClick={props.getProductsClick}>
        Get Products
      </Button>
    </>
  );
}
