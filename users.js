import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { UserCard } from './user-card';
import { Grid } from '@mui/material'
import Navbar from './navbar';
import { GET_USERS } from './queries';


/**
 * Quotes Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
export const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  console.log(data.users);

  return (
    <>
    <Navbar />
    <Grid container spacing={2} marginTop={2}>
      {
      data.users.map((pet) => (
        <Grid item key={pet.id} xs={12} md={3} >
          <UserCard  pet={pet}/>
          </Grid>
      ))
    }

    </Grid>
    </>
  );
};

