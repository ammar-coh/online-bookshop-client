import React, { useEffect, useContext, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import Context from '../../context'
import { useForm, Controller } from "react-hook-form";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { useStylesInformation } from './style'
import Radio from '@mui/material/Radio';
import Autocomplete from './country';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
function InformationForm() {
    const dispatch = useDispatch();
    const classes = useStylesInformation()

    return (
        <Grid style={{ width: "100%", display: "flex" }}>
            <Grid className={classes.informationSection1} style={{ display: "block" }}>
                <Grid style={{ display: "block", width: "100%" }}>
                    <Typography style={{
                        padding: "0px 0px 5px 0px",
                    }}>First Name</Typography>
                    <TextField
                        style={{ width: "100%" }}
                    />
                </Grid>
                <Grid>
                    <Typography style={{ padding: "15px 0px 5px 0px" }}>User name</Typography>
                    <TextField
                        style={{ width: "100%" }}
                    />
                </Grid>
                <Grid style={{ display: "block", width: "100%" }}>
                    <Typography style={{ padding: "15px 0px 5px 0px" }}>Email</Typography>
                    <TextField
                        type="email"
                        style={{ width: "100%" }} />
                </Grid>
                <Grid style={{ display: "block", width: "100%" }}>
                    <Typography style={{ padding: "15px 0px 5px 0px" }}>Gender:</Typography>
                    <Grid
                        style={{
                            // border: "1px solid red",
                            display: "flex",
                            justifyContent: "flex-start",
                            padding: "0px"
                        }}>
                        <Radio
                            // checked={selectedValue === 'a'}
                            // onChange={handleChange}
                            value="male"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <Radio
                            // checked={selectedValue === 'a'}
                            // onChange={handleChange}
                            value="female"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.informationSection2}>
                <Grid style={{ display: "block", width: "100%" }}>
                    <Typography style={{ padding: "0px 0px 5px 0px" }}>Last Name</Typography>
                    <TextField
                        style={{ width: "100%" }} />
                </Grid>
                <Grid style={{ display: "block", width: "100%" }}>
                    <Typography style={{ padding: "15px 0px 5px 0px" }}>Country:</Typography>
                    <Autocomplete />
                </Grid>
                <Grid style={{ display: "block", width: "100%" }}>
                    <Typography style={{ padding: "15px 0px 5px 0px" }}>Age:</Typography>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        // onChange={handleChange}
                        style={{ width: "100%" }}
                    >
                        <MenuItem value={12 - 18}>12-18</MenuItem>
                        <MenuItem value={19 - 25}>19-25</MenuItem>
                        <MenuItem value={26 - 40}>26-40</MenuItem>
                        <MenuItem value={41 - 60}>41-60</MenuItem>
                        <MenuItem value={`61>`}>61 &gt;</MenuItem>
                    </Select>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default InformationForm