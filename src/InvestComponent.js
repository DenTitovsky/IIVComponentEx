import React from "react";
import { Grid, Input, IconButton, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

const InputWithIcon = ({ ph }) => (
  <Grid container spacing={16}>
    <Grid item container alignItems="flex-start">
      <Grid item>
        <Input placeholder={ph} />
      </Grid>
      <Grid item>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  </Grid>
);

const InvestComponent = props => {
  const { classes } = props;

  return (
    <Grid container direction="column">
      <Grid item>
        <InputWithIcon ph={"Введите сумму в Р"} />
        <InputWithIcon ph={"Введите сумму в Р"} />
        <InputWithIcon ph={"Введите сумму в Р"} />
      </Grid>
      <Grid item>
        <Button variant="text" size="small" className={classes.button}>
          <ArrowBackIcon
            className={classNames(classes.leftIcon, classes.iconSmall)}
          />
          Добавить валюту
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(InvestComponent);
