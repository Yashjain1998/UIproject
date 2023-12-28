import React from 'react';
import {
  Container,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormGroup,
} from '@mui/material';

const CompanyForm = () => {
  return (
    <Container>
      <div>
        <div className='contact'>
        <Typography variant="h4" gutterBottom>
          Company Information
        </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <FormGroup>
              <FormControl fullWidth>
                <InputLabel>Company Name:</InputLabel>
                <Input type="text" required/>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Address 1:</InputLabel>
                <Input type="text" required/>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Address 2:</InputLabel>
                <Input type="text" required/>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Address 3:</InputLabel>
                <Input type="text" required/>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Email Id:</InputLabel>
                <Input type="email" required placeholder='VIJAY@FUTURETECHSOFT.IN'/>
              </FormControl>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>PAN NO:</InputLabel>
                    <Input type="text" placeholder='APM11343AMP' required/>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>GST NO:</InputLabel>
                    <Input type="text" placeholder='24AAKCC5083C1ZV'/>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>TAX NO:</InputLabel>
                    <Input type="text" placeholder='24AAKCC5083C1ZV'/>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>CIN NO:</InputLabel>
                    <Input type="text" placeholder='24AAKCC5083C1ZV'/>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>  </InputLabel>
                    <Input type="date"/>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>Business Currency:</InputLabel>
                    <Input type="text" placeholder='DOLLAR'/>
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
          </Grid>
          <Grid item xs={5}>
            <FormControl fullWidth>
              <InputLabel>Short Name:</InputLabel>
              <Input type="text" placeholder='FUTURETECH'/>
            </FormControl>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Count:</InputLabel>
                  <Input type="text" required/>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>State:</InputLabel>
                  <Input type="text" required/>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>City:</InputLabel>
                  <Input type="text" required/>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Pin Code:</InputLabel>
                  <Input type="Number" required/>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Phone No:</InputLabel>
                  <Input type="Numaber" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Mobile No:</InputLabel>
                  <Input type="Number" required/>
                </FormControl>
              </Grid>
            </Grid>
            <FormControl fullWidth>
              <InputLabel>Website:</InputLabel>
              <Input type="text" />
            </FormControl>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Business Reg No:</InputLabel>
                  <Input type="text" placeholder='24AAKCC5083C1ZV'/>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>VAT No:</InputLabel>
                  <Input type="text" placeholder='24AAKCC5083C1ZV'/>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>RBI Code No:</InputLabel>
                  <Input type="text" placeholder='24AAKCC5083C1ZV'/>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>IEC Code:</InputLabel>
                  <Input type="text" placeholder='24AAKCC5083C1ZV'/>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>AC Currency:</InputLabel>
                  <Input type="text" placeholder='INR'/>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Is Action:</InputLabel>
                  <Input type="text" placeholder='Y/N'/>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default CompanyForm;