import { useQuery } from "@apollo/client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_USERS } from "./queries";
import Navbar from "./navbar";

export const UserDetail = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_USERS, {
    variables: { userId: id },
  });

  if (error) return "errorrrrr";

  if (loading) return "loading...";

  const pet = data.pet;
  return (
    <>
   <Navbar />
    <Grid container spacing={4} marginTop={2}>
    <Grid item xs={2}></Grid>
    <Grid item xs={3}>
        <Typography variant="h5">{user.firstName}</Typography>
        <Typography>{lastName}</Typography>
        <Typography>{email}</Typography>
        <Typography variant="h3">Address:</Typography>
        <Typography>{street}</Typography>
        <Typography>{city}</Typography>
        <Typography>{state}</Typography>
        <br></br>
        <Typography>Welcome, {firstName} </Typography>
      </Grid>
    </Grid>
    
  
    </>
  );
};


