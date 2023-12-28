import React from "react";
import "../App.css";

import {
  Typography,
  Grid,
  FormGroup,
  FormControl,
  List,
  ListItem,
} from "@mui/material";

const CompanyBankForm = () => {
  return (
    <div>
      <div className="contact" style={{paddingBlock:'1rem'}}>
        <Typography variant="h4">Company Bank</Typography>
      </div>

      <div>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <FormGroup>
              <div style={{ display: "flex" }}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label
                    style={{
                      paddingRight: "10px",
                      width: "15%",
                      textAlign: "end",
                    }}
                  >
                    Bank Name:
                  </label>
                  <input type="text" style={{ height: "10px", width: "80%" }} required/>
                </FormControl>
              </div>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label
                      style={{
                        paddingRight: "10px",
                        width: "30%",
                        textAlign: "end",
                      }}
                    >
                      Account No:
                    </label>
                    <input
                      type="number"
                      style={{ height: "10px", width: "60%" }}
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label style={{ paddingRight: "10px" }}>AC Type:</label>
                    <input
                      type="text"
                      style={{ height: "10px", width: "70%" }}
                      required
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <div style={{ display: "flex" }}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label style={{ paddingRight: "10px", width: "10%" }}>
                    Address:
                  </label>
                  <input type="text" style={{ height: "10px", width: "85%" }} placeholder="15 BELGIUM TOWER,DELHI GATE"/>
                </FormControl>
              </div>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label
                      style={{
                        paddingRight: "10px",
                        width: "15%",
                        textAlign: "end",
                      }}
                    >
                      County:
                    </label>
                    <input
                      type="text"
                      style={{ height: "10px", width: "75%" }}
                      placeholder="INDEA"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label
                      style={{
                        paddingRight: "10px",
                        width: "10%",
                        textAlign: "end",
                      }}
                    >
                      State:
                    </label>
                    <input
                      type="text"
                      style={{ height: "10px", width: "80%" }}
                      required
                      placeholder="GUJARAT"
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
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label
                      style={{
                        paddingRight: "10px",
                        width: "25%",
                        textAlign: "end",
                      }}
                    >
                      IFSC Code:
                    </label>
                    <input
                      type="text"
                      style={{ height: "10px", width: "65%" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label
                      style={{
                        paddingRight: "10px",
                        width: "20%",
                        textAlign: "end",
                      }}
                    >
                      IBAN No:
                    </label>
                    <input
                      type="text"
                      style={{ height: "10px", width: "70%" }}
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
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label
                      style={{
                        paddingRight: "10px",
                        width: "20%",
                        textAlign: "end",
                      }}
                    >
                      FedWire:
                    </label>
                    <input
                      type="text"
                      style={{ height: "10px", width: "70%" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label
                      style={{
                        paddingRight: "10px",
                        width: "25%",
                        textAlign: "end",
                      }}
                    >
                      Chips No:
                    </label>
                    <input
                      type="text"
                      style={{ height: "10px", width: "65%" }}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <div style={{ display: "flex" }}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label
                    style={{
                      paddingRight: "10px",
                      width: "10%",
                      textAlign: "end",
                    }}
                  >
                    Comments:
                  </label>
                  <input type="text" style={{ height: "10px", width: "85%" }} />
                </FormControl>
              </div>
            </FormGroup>
          </Grid>
          <Grid item xs={5}>
            <FormGroup>
              <div style={{ display: "flex" }}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <label
                    style={{
                      paddingRight: "10px",
                      width: "20%",
                      textAlign: "end",
                    }}
                  >
                    Account Name:
                  </label>
                  <input type="text" style={{ height: "10px", width: "75%" }} required/>
                </FormControl>
              </div>
              <div style={{ display: "flex" }}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <label
                    style={{
                      paddingRight: "10px",
                      width: "20%",
                      textAlign: "end",
                    }}
                  >
                    Branch Name:
                  </label>
                  <input type="text" style={{ height: "10px", width: "30%" }} placeholder="RING ROAD"/>
                </FormControl>
              </div>
              <div style={{ display: "flex" }}>
                <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <label
                    style={{
                      paddingRight: "10px",
                      width: "20%",
                      textAlign: "end",
                    }}
                  >
                    Phone No:
                  </label>
                  <input type='number' style={{ height: "10px", width: "30%" }} placeholder="0261898578"/>
                </FormControl>
              </div>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label
                      style={{
                        paddingRight: "10px",
                        textAlign: "end",
                        width: "10%",
                      }}
                    >
                      City:
                    </label>
                    <input
                      type="text"
                      style={{ height: "10px", width: "80%" }}
                      placeholder="SURAT"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label
                      style={{
                        paddingRight: "10px",
                        width: "25%",
                        textAlign: "end",
                      }}
                    >
                      Pin Code:
                    </label>
                    <input
                      type='number'
                      style={{ height: "10px", width: "65%" }}
                      placeholder="395003"
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
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label
                      style={{
                        paddingRight: "10px",
                        width: "30%",
                        textAlign: "end",
                      }}
                    >
                      Clearing No:
                    </label>
                    <input
                      type="text"
                      style={{ height: "10px", width: "60%" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label style={{ paddingRight: "10px", width: "30%" }}>
                      SWIFT Code:
                    </label>
                    <input
                      type="text"
                      style={{ height: "10px", width: "60%" }}
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
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label style={{ paddingRight: "10px" }}>AD Code:</label>
                    <input
                      type="text"
                      style={{ height: "10px", width: "70%" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <label style={{ paddingRight: "10px" }}>Currency:</label>
                    <input
                      type="text"
                      style={{ height: "10px", width: "70%" }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
          </Grid>
          <Grid item xs={2}>
            <div>
              <Typography
                align="center"
                variant="h6"
                style={{ backgroundColor: "lightgray" }}
              >
                Add
              </Typography>
              <List className="list">
                <ListItem>KARUR VYSYA BANK</ListItem>
                <ListItem>AXIS BANK</ListItem>
                <ListItem> </ListItem>
                {/* Add other list items as needed */}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CompanyBankForm;
