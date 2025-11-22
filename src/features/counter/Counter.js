import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment, decrement, incrementByAmount } from './counterSlice';
import { Button, Typography, Container, Box, TextField } from '@mui/material';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = React.useState('2');

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Counter
        </Typography>
        <Typography variant="h4" component="div" sx={{ my: 3 }}>
          {count}
        </Typography>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <TextField
            label="Increment by amount"
            type="number"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            sx={{ mr: 2, width: '150px' }}
          />
          <Button 
            variant="contained" 
            color="primary"
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Counter;
