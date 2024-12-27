// src/components/ProductCard.jsx
import React, { useEffect, useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import BounceLoader from "react-spinners/BounceLoader";
import { BasketContext } from '../context/BasketContext'; // Import BasketContext

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToBasket } = useContext(BasketContext); // Use the addToBasket function from context

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <BounceLoader color="blue" />
      ) : (
        <Grid container spacing={3} sx={{ padding: 2 }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Category: {product.category}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                      Price: ${product.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 1 }}>
                      Rating: {product.rating.rate} ({product.rating.count} reviews)
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => addToBasket(product)} // Add product to basket when clicked
                  >
                    Add to Basket
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
