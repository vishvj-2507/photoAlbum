import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CameraOutlinedIcon from '@material-ui/icons/CameraOutlined';
import IconButton from '@material-ui/core/IconButton';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.4rem',
  '@media (min-width:600px)': {
    fontSize: '1.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

theme.typography.h6 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        vijay-album
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Album() 
{
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar className={classes.logoContainer}>
            <CameraOutlinedIcon className={classes.icon} />
            <Typography variant="h6" color='inherit' noWrap>
                <Link color="inherit" href="https://www.google.com/" className={classes.headerLink}>My Album</Link>
            </Typography>
            <IconButton  
              aria-label="menu" 
              className={classes.iconRC}
              aria-controls="long-menu"
              aria-haspopup="true"  
              onClick={handleClick}>
                  <MoreVertIcon className={classes.iconR}/>
            </IconButton>
            <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}  
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}                
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>          
            </Menu>
            
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              Welcome to My Album
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h3" component="h2">
                        Heading {card}
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="secondary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            This is a Footer.
          </Typography>
          <Copyright />
        </footer>
      </React.Fragment>
    </ThemeProvider>
  );
}