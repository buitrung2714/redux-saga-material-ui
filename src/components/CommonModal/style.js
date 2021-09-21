const style = (theme) => ({
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.color.primary,
    color: theme.shape.textColor,
    padding: theme.spacing(2),
  },
  title: {
    transform: "capitalize",
    fontFamily: theme.typography.fontFamily,
  },
  icon: {
    cursor: "pointer",
    fontSize: 25,
  },
  content: {
    padding: theme.spacing(2),
  },
});

export default style;
