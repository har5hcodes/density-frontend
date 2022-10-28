import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MarketPriceDisplay = () => {
  return (
    <>
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Current Market Price
          </Typography>
          <Typography variant="h3"  >
             $250
          </Typography> 
        </CardContent>
        <CardActions>
          <Button size="small">Place an order</Button> 
        </CardActions>
      </Card>
    </>
  );
};

export default MarketPriceDisplay;
