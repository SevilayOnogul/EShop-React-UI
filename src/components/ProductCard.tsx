import React from 'react'
import type { ProductType } from '../types/Types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 

interface ProductCardProps {
  product: ProductType
}

function ProductCard(props: ProductCardProps) {
  const { id, title, price, description, category, image, rating } = props.product;


  return (
    <Card sx={{cursor: 'pointer',boxShadow:'1px 5px 5px lightgrey', width: '330px',height:'600px', display: 'flex', flexDirection: 'column',alignItems: 'center', margin:'40px 10px'}}>
      <img src={image} width={230} height={230} />
      <CardContent sx={{height:'250px'}}>

        <Typography variant="h5" component="div">
          {title.substring(1,70)}
        </Typography>
        <Typography>
          {description.substring(1,200)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="info">
          Detay
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard