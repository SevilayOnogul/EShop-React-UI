import React, { useEffect, useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import categoryService from '../services/CategoryService';
import { setLoading } from '../redux/appSlice';

function Category() {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState<string[]>();

    const getAllCategories = async () => {
        try {
            dispatch(setLoading(true));
            const categories: string[] = await categoryService.getAllCategories();
            setCategories(categories);
        } catch (error) {
            console.error('Kategoriler yüklenirken hata oluştu:', error);
        }
        finally {
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
        getAllCategories();
    }, [])

    return (
        <div style={{ marginTop: '60px', marginLeft: '25px' }}>
            <FormGroup>
                {
                    categories && categories.map((category: string,index:number) => (
                        <FormControlLabel key={index} control={<Checkbox defaultChecked />} label={category} />

                    ))
                }

            </FormGroup>

        </div>
    )
}

export default Category


