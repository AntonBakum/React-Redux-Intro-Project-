
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { RootState } from "../../app/store";
import { getProducts } from "../../features/products/CatalogApiService";
import ProductsPage from "./ProductsPage";


export const ProductsPageContainer = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: RootState) => state.catalog.products);
    const productIds = useAppSelector((state: RootState) => state.catalog.productsIds);
    return (
        <ProductsPage getProductsClick= {() =>{dispatch(getProducts())}}  products={products} productIds = {productIds}/>
    )
}