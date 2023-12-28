import React from "react";
import {
  Container,
  Grid,
  Typography,
  FormControl,
  FormGroup,
} from "@mui/material";

const CompanyForm = () => {
  return (
    
      <div>
        <div className="contact" style={{paddingBlock:'1rem'}}>
          <Typography variant="h4">
            Company Information
          </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <FormGroup>
              <FormControl
                fullWidth
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: "1rem",
                }}
              >
                <label style={{ paddingRight: "10px", width: '20%', textAlign:'end'}}>Company Name:</label>
                <input type="text" style={{ height: "10px", width:'80%' }} required />
              </FormControl>
              <FormControl
                fullWidth
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: "1rem",
                }}
              >
                <label style={{ paddingRight: "10px", width:'20%', textAlign:'end'}}>Address 1:</label>
                <input type="text" style={{ height: "10px", width:'80%'}} required />
              </FormControl>
              <FormControl
                fullWidth
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: "1rem",
                }}
              >
                <label style={{ paddingRight: "10px", width:'20%', textAlign:'end'}}>Address 2:</label>
                <input type="text"style={{ height: "10px", width:'80%'}} required />
              </FormControl>
              <FormControl
                fullWidth
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: "1rem",
                }}
              >
                <label  style={{ paddingRight: "10px", width:'20%', textAlign:'end'}}>Address 3:</label>
                <input type="text" style={{ height: "10px", width:'80%'}} required />
              </FormControl>
              <FormControl
                fullWidth
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: "1rem",
                }}
              >
                <label  style={{ paddingRight: "10px", width:'20%', textAlign:'end'}}>Email Id:</label>
                <input
                  type="email"
                  style={{ height: "10px", width:'80%'}} 
                  required
                  placeholder="VIJAY@FUTURETECHSOFT.IN"
                />
              </FormControl>
              <Grid container>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label style={{ paddingRight: "10px", width:'25%', textAlign:'end'}}>PAN NO:</label>
                    <input
                      type="text"
                      style={{ height: "10px", width:'75%'}} 
                      placeholder="APM11343AMP"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label  style={{ paddingRight: "10px", width:'25%', textAlign:'end'}}>GST NO:</label>
                    <input
                      type="text"
                      style={{ height: "10px", width:'75%'}} 
                      placeholder="24AAKCC5083C1ZV"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label  style={{ paddingRight: "10px", width:'25%', textAlign:'end'}}>TAX NO:</label>
                    <input
                      type="text"
                      style={{ height: "10px", width:'75%'}} 
                      placeholder="24AAKCC5083C1ZV"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label  style={{ paddingRight: "10px", width:'25%', textAlign:'end'}}>CIN NO:</label>
                    <input
                      type="text"
                      style={{ height: "10px", width:'75%'}} 
                      placeholder="24AAKCC5083C1ZV"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={5}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label style={{ paddingRight: "10px" }}>Start Date:</label>
                    <input type="date" style={{ height: "10px" }} />
                  </FormControl>
                </Grid>
                <Grid item xs={7}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label style={{ paddingRight: "10px", width:'40%', textAlign:'end'}}>
                      Business Currency:
                    </label>
                    <input
                      type="text"
                      style={{ height: "10px", width:'60%'}}
                      placeholder="DOLLAR"
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
          </Grid>
          <Grid item xs={5}>
            <FormControl
              fullWidth
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <label style={{ paddingRight: "10px" }}>Short Name:</label>
              <input
                type="text"
                style={{ height: "10px" }}
                placeholder="FUTURETECH"
              />
            </FormControl>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label style={{ paddingRight: "10px" }}>Count:</label>
                  <input type="text" style={{ height: "10px", width:'100%'}} required />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label style={{ paddingRight: "10px" }}>State:</label>
                  <input type="text" style={{ height: "10px", width:'100%' }} required />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label style={{ paddingRight: "10px" }}>City:</label>
                  <input type="text" style={{ height: "10px", width:'100%' }} required />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label style={{ paddingRight: "10px", width:'30%' }}>Pin Code:</label>
                  <input type="Number" style={{width:'70%', height:'10px'}} required />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label style={{ paddingRight: "10px"}}>Phone No:</label>
                  <input type="Numaber" style={{height:'10px'}}/>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label style={{ paddingRight: "10px", width: '30%' }}>Mobile No:</label>
                  <input type="Number" style={{height:'10px', width:'70%'}} required />
                </FormControl>
              </Grid>
            </Grid>
            <FormControl
              fullWidth
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <label style={{ paddingRight: "10px" }}>Website:</label>
              <input type="text" style={{ height: "10px", width:'55%' }} />
            </FormControl>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label style={{ paddingRight: "10px" }}>
                    Business Reg No:
                  </label>
                  <input
                    type="text"
                    style={{ height: "10px", width:'100%' }}
                    placeholder="24AAKCC5083C1ZV"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label style={{ paddingRight: "10px" }}>VAT No:</label>
                  <input
                    type="text"
                    style={{ height: "10px", width:'100%' }}
                    placeholder="24AAKCC5083C1ZV"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label style={{ paddingRight: "10px" }}>RBI Code No:</label>
                  <input
                    type="text"
                    style={{ height: "10px" }}
                    placeholder="24AAKCC5083C1ZV"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label style={{ paddingRight: "10px" }}>IEC Code:</label>
                  <input
                    type="text"
                    style={{ height: "10px", width:'100%'}}
                    placeholder="24AAKCC5083C1ZV"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label style={{ paddingRight: "10px" }}>AC Currency:</label>
                  <input
                    type="text"
                    style={{ height: "10px" }}
                    placeholder="INR"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label style={{ paddingRight: "10px" }}>Is Action:</label>
                  <input
                    type="text"
                    style={{ height: "10px", width:'100%' }}
                    placeholder="Y/N"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    
  );
};

export default CompanyForm;
