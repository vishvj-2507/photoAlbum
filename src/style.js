import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
    "&:hover": {
      color: "yellow",
    },
  },

  iconRC: {
    position: "absolute",
    right: 20,
  },

  iconR: {
    color: "white",
  },

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(13, 0, 6), // 1 = 8px
  },

  headerLink: {
    fontSize: 18,
    "&:hover": {
      color: "yellow",
      textDecoration: "none",
    },
  },

  heroButtons: {
    marginTop: theme.spacing(4),
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "60%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "pink",
    padding: theme.spacing(1),
    borderTop: "2px dotted red",
  },
}));

export default useStyles;
