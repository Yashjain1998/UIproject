import React from 'react';
import { Container, Button, Toolbar } from '@mui/material';
import { styled } from '@mui/system';

// Define styles using styled
const StyledContainer = styled(Container)({
  padding: (theme) => theme.spacing(2),
  color: '#fff', // Text color
  
});

const StyledButton = styled(Button)({
  marginRight: (theme) => theme.spacing(1),
  backgroundColor: 'rgb(57, 56, 56)', // Green button color
  color: '#fff', // Text color
  '&:hover': {
    backgroundColor: '#45a049', // Darker green on hover
  },
});

const ButtonGroup = ({ onClick }) => {
  return (
    <div style={{marginTop:"2rem"}}>
    <StyledContainer>
      <Toolbar>
        <StyledButton>Add</StyledButton>
        <StyledButton>Save</StyledButton>
        <StyledButton>Edit</StyledButton>
        <StyledButton>View</StyledButton>
        <StyledButton>Cancel</StyledButton>
      </Toolbar>
    </StyledContainer>
    </div>
  );
};

export default ButtonGroup;
