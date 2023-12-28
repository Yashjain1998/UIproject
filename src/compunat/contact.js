import React from "react";
import '../App.css';
import {
  Typography,
  Grid,
  FormControl,
  FormGroup,
  List,
  ListItem,

} from "@mui/material";



const CompanyContactForm = () => {
 
  return (
   
      <div>
        <div className="contact" style={{paddingBlock:'1rem'}}>
          <Typography variant="h4">Company Contact</Typography>
        </div>
        
        <div>
          <Grid container spacing={4}>
            <Grid item xs={5}>
              <FormGroup style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <FormControl fullWidth
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label style={{paddingRight:'10px'}}>Contact Name:</label>
                    <input type="text" style={{height:'10px', width:'60%' }} required/>
                  </FormControl>
                </div>
                <div style={{ display: "flex" }}>
                  <FormControl fullWidth
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                    >
                    <label style={{paddingRight:'10px'}}>Designation :</label>
                    <input type="text" style={{width:'80%', height:'10px' }} required/>
                  </FormControl>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "1rem" }}>
                    <FormControl fullWidth
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: "1rem",
                      }}
                      >
                      <label style={{paddingRight:'10px', width:'30%'}}>Email Id :</label>
                      <input type="text" style={{height:'10px', width:'70%' }} required />
                    </FormControl>
                  </div>
                  <div>
                    <FormControl fullWidth
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: "1rem",
                      }}
                      >
                      <label style={{paddingRight:'10px', width:'30%', textAlign:'end'}}>Mobile No :</label>
                      <input type='tel' style={{height:'10px', width:'70%'}} required/>
                    </FormControl>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "1rem" }}>
                    <FormControl fullWidth
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: "1rem",
                      }}
                      >
                      <label style={{paddingRight:'10px'}}>PAN No:</label>
                      <input type="text" style={{height:'10px'}} placeholder="APM1134AMP"/>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl fullWidth
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: "1rem",
                      }}
                      >
                      <label style={{paddingRight:'10px', width:'30%', textAlign:'end' }}>Adhar No:</label>
                      <input type='number' style={{height:'10px', width:'70%'}} placeholder="1582 6858 6985"/>
                    </FormControl>
                  </div>
                </div>
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" style={{width:'30%', textAlign:'center'}}>+ Contact</Typography>
                <List className="list" style={{width:'30%'}}>
                  <ListItem>VIJAY PRAJAPATI</ListItem>
                  <ListItem>JAYESH PRAJAPATI</ListItem>
                  {/* Add other list items as needed */}
                </List>
              </div>
            </Grid>
          </Grid>
        </div>
        
      </div>
    
  );
};

export default CompanyContactForm;
