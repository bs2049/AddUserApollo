import React from 'react';
import styled from '@emotion/styled';
import { blue, green, grey, pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
//import { colors, mq } from '../styles';

/**
 * Pet Card component renders basic info in a card format
 * for each track populating the tracks grid homepage.
 */
export const UserCard = ({ user }) => {
  const { firstName, id, lastName   } = user;

  return (
    <Link to={`/userDetail/${id}`}>
    <CardContainer>
      <CardContent>
        <CardBody>
          <CardTitle>{firstName || ''}</CardTitle>
            <CardTitle>{lastName || ''}</CardTitle>
        </CardBody>
      </CardContent>
    </CardContainer>
    </Link>
  );
};


/** Track Card styled components */
const CardContainer = styled.div({
  borderRadius: 6,
  backgroundSize: 'cover',
  backgroundColor: 'white',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 380,
  margin: 10,
  overflow: 'hidden',
  position: 'relative',
  ':hover': {
    backgroundColor: green[600]
  },
  cursor: 'pointer',
});

const CardContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '100%',
});

const CardTitle = styled.h3({
  textAlign: 'center',
  fontSize: '1.4em',
  lineHeight: '1em',
  fontWeight: 700,
  color: blue,
  flex: 1,
});



const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: 'flex',
  color: grey[0],
  flexDirection: 'column',
  justifyContent: 'space-around',
});



