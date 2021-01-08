import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationdata, Product } from "./types";




function Orders() {

    const [product, setProduct] = useState<Product[]>([]);
    const[orderLocation, setOrderLocation ] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts()
        .then(Response => setProduct(Response.data))
        .catch(error => console.log(error))
    }, []);


    return(
        <div className="orders-container">
            <StepsHeader />
            <ProductList products={product}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>

    )
}

export default Orders;