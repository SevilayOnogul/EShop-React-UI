import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, setLoading, setProducts } from '../redux/appSlice';
import type { ProductType, UserType } from '../types/Types';
import ProductService from '../services/ProductService';
import type { RootState } from '../redux/store';
import ProductCard from '../components/ProductCard';

function HomePage() {


    const dispatch = useDispatch();
    const { products } = useSelector((state: RootState) => state.app);


    const getAllProducts = async () => {
        try {
            dispatch(setLoading(true));
            const response: ProductType[] = await ProductService.getAllProducts();
            if (response) {
                dispatch(setProducts(response));
            }
        } catch (error) {
            console.error('Ürünler yüklenirken hata oluştu:', error);
        } finally {
            dispatch(setLoading(false));
        }
    }
    useEffect(() => {
        getAllProducts();
    }, []);

    useEffect(() => {
        getAllProducts(); const result = localStorage.getItem("currentUser");
        if (result) {
            const currentUser: UserType = JSON.parse(result) as UserType;
            dispatch(setCurrentUser(currentUser));
        }
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', backgroundColor: '#fef2f2', padding: '20px', justifyContent: 'center' }}>
            {
                products && products.map((product: ProductType, index: number) => (
                    <ProductCard key={index} product={product} />
                ))
            }
        </div>
    )
}

export default HomePage