import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { GridToolbar} from '@mui/x-data-grid/components/toolbar';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { productTableColumns } from '../../constants/productTableColumns';
import { ProductModel } from '../../models/ProductModel';

interface Props {
  getProductsClick: () => void;
  products: { [productId: number]: ProductModel };
  productIds: number[];
}

export default function ProductsPage (props: Props) {
  return (
    <>
        <Box textAlign="center" marginBottom = '8px'>
          <Button variant="contained" onClick={props.getProductsClick} size = 'large'>
            Get Products
          </Button>
        </Box>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            columns={productTableColumns}
            rows={Object.values(props.products)}
            getRowId={(row) => row.name}
            pageSize={5}
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: {
              showQuickFilter: true,
            }}}
          />
        </Box>
    </>
  );
}
/**/