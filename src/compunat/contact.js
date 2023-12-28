import React from "react";
import { useState } from "react";
import '../App.css';
import {
  Container,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormGroup,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const CompanyContactForm = () => {
  const [contactform,setcontactform]=useState(false);
  return (
    <Container>
      <div>
        <div className="contact" onClick={()=>setcontactform(!contactform)}>
          <Typography variant="h4">Company Contact</Typography>
          <div id="button"><IconButton>
          <KeyboardArrowDownIcon />
        </IconButton></div>
        </div>
        {contactform &&
        <div>
          <Grid container spacing={4}>
            <Grid item xs={5}>
              <FormGroup style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <FormControl fullWidth>
                    <InputLabel>Contact Name</InputLabel>
                    <Input type="text" />
                  </FormControl>
                </div>
                <div style={{ display: "flex" }}>
                  <FormControl fullWidth>
                    <InputLabel>Designation</InputLabel>
                    <Input type="text" />
                  </FormControl>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "1rem" }}>
                    <FormControl fullWidth>
                      <InputLabel>Email Id:</InputLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                  <div>
                    <FormControl fullWidth>
                      <InputLabel>Mobile No:</InputLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "1rem" }}>
                    <FormControl fullWidth>
                      <InputLabel>PAN No:</InputLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                  <div>
                    <FormControl fullWidth>
                      <InputLabel>Adhar No:</InputLabel>
                      <Input type="number" />
                    </FormControl>
                  </div>
                </div>
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6">+ Contact</Typography>
                <List>
                  <ListItem>VIJAY PRAJAPATI</ListItem>
                  <ListItem>JAYESH PRAJAPATI</ListItem>
                  {/* Add other list items as needed */}
                </List>
              </div>
            </Grid>
          </Grid>
        </div>
        }
      </div>
    </Container>
  );
};

export default CompanyContactForm;
