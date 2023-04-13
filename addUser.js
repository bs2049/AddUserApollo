import React, { useState } from "react";
import {} from "./mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import { Button, Grid, TextField } from "@mui/material";
import { GET_USER } from "./queries";

export const AddUser = () => {
  const navigate = useNavigate();

  const [userInput, setPetInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: 0,
  });

  const [addUser, result] = useMutation(GET_USER, {
    variables: {
      input: {
        ...userInput,
      },
      refetchQueries: [{ query: GET_USER }, "users"],
    },
    errorPolicy: "all",
    onCompleted: (data) => {
      console.log(data);
      navigate("/", { state: { success: data.success } });
    },
  });

  return (
    <>
      <Navbar />
      <Grid container marginTop={2} direction="column">
        <Grid item>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              console.log(userInput);
              addUser();
              console.log(result);
            }}
          >
            <TextField
              name="firstname"
              label="first name"
              type="text"
              onChange={e => (setUserInput({ ...userInput, firstName: e.target.value }))
              }
            />
            <TextField
              name="lastname"
              label="last name"
              type="text"
              onChange={e => (setUserInput({ ...userInput, lastName: e.target.value }))
              }
            />
            <TextField
              name="state"
              label="state"
              type="text"
              onChange={e => (setUserInput({ ...userInput, state: e.target.value }))
              }
            />
            <TextField
              name="city"
              label="city"
              type="text"
              onChange={e => (setUserInput({ ...userInput, city: e.target.value }))
              }
            />
            <TextField
              name="street"
              label="street"
              type="text"
              onChange={e => (setUserInput({ ...userInput, street: e.target.value }))
              }
            />
            <TextField
              name="zip"
              label="zip"
              type="integer"
              onChange={e => (setUserInput({ ...userInput, city: e.target.value }))
              }
            />

            <Button type="submit" variant="outlined">
              Add User{" "}
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
