import React from 'react'
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import GridContainer from './Grid/GridContainer'
import GridItem from './Grid/GridItem'
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import styles from '../assets/jss/material-kit-react/views/componentsSections/javascriptStyles'
const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";
export default function DatePicker() {
    const classes = useStyles();
    // const [anchorElLeft, setAnchorElLeft] = React.useState(null);
    // const [anchorElTop, setAnchorElTop] = React.useState(null);
    // const [anchorElBottom, setAnchorElBottom] = React.useState(null);
    // const [anchorElRight, setAnchorElRight] = React.useState(null);
    // const [classicModal, setClassicModal] = React.useState(false);
    
    return (
        <div className={classes.section}>
            <div className={classes.container}>
             <div className={classes.title}>
                <h3>Datetime Picker</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
              
                <GridItem xs={12} sm={12} md={6}>
                  <InputLabel className={classes.label}>
                    Datetime Picker
                  </InputLabel>
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormControl>
                </GridItem>
              
              </GridItem>
              </GridContainer>

            </div>
            
        </div>
    )
}
