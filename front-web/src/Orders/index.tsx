import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchProducts, saveOrder } from '../api';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';
import OrderLocation from './OrderLocation';
import OrderSumary from './OrderSummary';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from "./types";




function Orders() {

    const [product, setProduct] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const[orderLocation, setOrderLocation ] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item)=>{
        return sum + item.price;
    }, 0);

    useEffect(() => {
        fetchProducts()
        .then(Response => setProduct(Response.data))
        .catch(error => {
            toast.warning('Erro ao enviar pedido');
        })
    }, []);

      
const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);
  
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(payload)
    .then((response) => {
      toast.error(`Pedido enviado com sucesso! N° ${response.data.id}`);
      setSelectedProducts([]);
    })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      })
  }


    return(
        <>

            <div className="orders-container">
                <StepsHeader />
                <ProductList 
                    products={product}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSumary  
                    amount={selectedProducts.length} 
                    totalPrice={totalPrice} 
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer />

        </>
    )
}

export default Orders;