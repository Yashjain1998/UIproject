import React from "react";
import '../App.css';
import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  IconButton,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  List,
  ListItem,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const CompanyBankForm = () => {
  const [Bankform, setBankform] = useState(true);
  return (
    <Container>
      <div>
        <div className="contact"  onClick={() => setBankform(!Bankform)}>
          <Typography variant="h4">Company Bank</Typography>
          <div id="button"><IconButton>
          <KeyboardArrowDownIcon />
        </IconButton></div>
        </div>
        {Bankform && (
          <div>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <FormGroup>
                  <div style={{ display: "flex" }}>
                    <FormControl fullWidth>
                      <InputLabel>Bank Name:</InputLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>Account No:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>AC Type:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                  </Grid>

                  <div style={{ display: "flex" }}>
                    <FormControl fullWidth>
                      <InputLabel>Address:</InputLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>County:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>State:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>IFSC Code:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>IBAN No:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>FedWire:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>Chips No:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                  </Grid>

                  <div style={{ display: "flex" }}>
                    <FormControl fullWidth>
                      <InputLabel>Comments:</InputLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                </FormGroup>
              </Grid>
              <Grid item xs={5}>
                <FormGroup>
                  <div style={{ display: "flex" }}>
                    <FormControl fullWidth>
                      <InputLabel>Account Name:</InputLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                  <div style={{ display: "flex" }}>
                    <FormControl fullWidth>
                      <InputLabel>Branch Name:</InputLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                  <div style={{ display: "flex" }}>
                    <FormControl fullWidth>
                      <InputLabel>Phone No:</InputLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>City:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>Pin Code:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>Clearing No:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>SWIFT Code:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>AD Code:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>Currency:</InputLabel>
                        <Input type="text" />
                      </FormControl>
                    </Grid>
                  </Grid>
                </FormGroup>
              </Grid>
              <Grid item xs={2}>
                <div>
                  <Typography align="center" variant="h6">
                    Add
                  </Typography>
                  <List>
                    <ListItem>KARUR VYSYA BANK</ListItem>
                    <ListItem>AXIS BANK</ListItem>
                    {/* Add other list items as needed */}
                  </List>
                </div>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CompanyBankForm;
