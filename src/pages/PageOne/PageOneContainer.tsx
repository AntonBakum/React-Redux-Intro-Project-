import PageOne from "./PageOne"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { RootState } from "../../app/store";
import { getProducts } from "../../features/products/CatalogApiService";


export const PageOneContainer = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: RootState) => state.catalog.products);
    const productIds = useAppSelector((state: RootState) => state.catalog.productsIds);
    return (
        <PageOne getProductsClick= {() =>{dispatch(getProducts())}}  products={products} productIds = {productIds}/>
    )
}