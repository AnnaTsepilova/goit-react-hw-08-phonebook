import React from 'react';
import { useLocation } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { GithubLogo } from 'components/Footer/Footer.styled';
import { Button } from 'pages/Home/HomePage.styled';
import PhoneIcon from 'services/phoneBook.png';

function Copyright(props) {
  return (
    <>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {'Copyright © '}
        {new Date().getFullYear()}
        {' | Developed by '}
        <Link
          color="inherit"
          href="https://github.com/AnnaTsepilova/goit-react-hw-08-phonebook"
        >
          <GithubLogo />
        </Link>{' '}
      </Typography>
    </>
  );
}

export default function HomePage() {
  const location = useLocation();
  return (
    <main>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              align="center"
              fontWeight="700"
              marginBottom="50px"
            >
              Welcome to your personal phonebook!
            </Typography>
            <img src={PhoneIcon} alt="Phonebook" width={300} />

            <Button to={`login`} state={location.state}>
              Get started
            </Button>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}
