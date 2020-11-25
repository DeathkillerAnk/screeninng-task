import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';

const FormControl = require('@material-ui/core/FormControl').default;
const FormHelperText = require('@material-ui/core/FormHelperText').default;
const InputLabel = require('@material-ui/core/InputLabel').default;
// import Select from '@material-ui/core/Select';

  
class Step2 extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.states = [
      {
        value: 'Maharashtra',
        label: 'Maharashtra',
      },
      {
        value: 'Uttar Pradesh',
        label: 'Uttar Pradesh',
      },
      {
        value: 'Madhya Pradesh',
        label: 'Madhya Pradesh',
      },
      {
        value: 'Goa',
        label: 'Goa',
      },
    ];
  }
  
  componentDidMount()
  {
    let input = this.state.input;
    input["state_"] = this.states[0].value;
    this.setState({
      input
    });
    console.log(this.state);
  }
  
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }

  handleSelect = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    // const state = event.target.name;
    this.setState({
      input
    });
  };

  

  
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["name"] = ""
        input["employee_email"] = "";
        // input["employee_password"] = "";
        // input["employee_confirm_password"] = "";
        input["state_"] = "";
        this.setState({input:input});
  
        alert('Demo Form is submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter employee id.";
      }
  
      // if (typeof input["name"] !== "undefined") {
      //   const re = /^\S*$/;
      //   if(input["employee_id"].length < 6 || !re.test(input["employee_id"])){ //change 6 with min char
      //       isValid = false;
      //       errors["employee_id"] = "Please enter valid id.";
      //   }
      // }
  
      if (!input["employee_email"]) {
        isValid = false;
        errors["employee_email"] = "Please enter employee email Address.";
      }
  
      if (typeof input["employee_email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["employee_email"])) {
          isValid = false;
          errors["employee_email"] = "Please enter valid email address.";
        }
      }
  
      // if (!input["employee_password"]) {
      //   isValid = false;
      //   errors["employee_password"] = "Please enter employee password.";
      // }
  
      // if (!input["employee_confirm_password"]) {
      //   isValid = false;
      //   errors["employee_confirm_password"] = "Please enter confirm password.";
      // }
  
      // if (typeof input["employee_password"] !== "undefined") {
      //   if(input["employee_password"].length < 6){
      //       isValid = false;
      //       errors["employee_password"] = "Please add at least 6 charachter.";
      //   }
      // }
  
      // if (typeof input["employee_password"] !== "undefined" && typeof input["employee_confirm_password"] !== "undefined") {
          
      //   if (input["employee_password"] !== input["employee_confirm_password"]) {
      //     isValid = false;
      //     errors["employee_password"] = "Passwords don't match.";
      //   }
      // }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <main >
      <div>
        <h1>Add User</h1>
        

        <form onSubmit={this.handleSubmit}>
        
          <TextField
            id="employee_id"
            label="employee_id"
            // className={classes.textField}
            // InputProps={{
            //     className: classes.input
            // }}
            type="text"
            name="name"
            margin="normal"
            variant="outlined"
            required
            autoFocus
            value = {this.state.input.name}
            onChange = {this.handleChange}
            error = {this.state.errors.name}
            helperText = {this.state.errors.name}
          />
        <br/>
        <TextField
          id="employee_email"
          label="Email"
          // className={classes.textField}
          // InputProps={{
          //     className: classes.input
          // }}
          type="email"
          name="employee_email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          required
          value = {this.state.input.employee_email}
          onChange = {this.handleChange}
          error = {this.state.errors.employee_email}
          helperText = {this.state.errors.employee_email}
        />
        <br/>

        <TextField
          id="number"
          label="Number"
          type="tel"
          name = "number"
          // InputLabelProps={{
          //   shrink: true,
          // }}
          variant="outlined"
          margin="normal"
          required
          value = {this.state.input.number}
          onChange = {this.handleChange}
        />
        <br/>

        {/* <FormControl variant="outlined" >
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          State
        </InputLabel>
        <NativeSelect
          variant="outlined"
          margin="normal"
          value={this.state.input.state_}
          onChange={this.handleSelect}
          inputProps={{
            name: 'state_',
            id: 'age-native-label-placeholder',
          }}
        >
          {/* <option value="">None</option> */}
          {/* <option value="Maha">Maha</option>
          <option value="Haryana">Haryana</option>
          <option value="MP">MP</option>
        </NativeSelect>
      </FormControl> */} 



        <TextField
          id="address"
          label="Address"
          type="text"
          name = "address"
          // InputLabelProps={{
          //   shrink: true,
          // }}
          variant="outlined"
          margin="normal"
          required
          value = {this.state.input.address}
          onChange = {this.handleChange}
        />
        <br/>


      <TextField
          name = "state_"
          id="state_"
          select
          // label="State"
          // placeholder = "select state"
          value={this.state.input.state_ ? this.state.input.state_: "Maharashtra"}
          onChange={this.handleSelect}
          // helperText="Please select your currency"
          variant="outlined"
          margin="normal"
          required
                    // InputLabelProps={{
          //   shrink: true,
          // }}
        >
          {this.states.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      <br/>



        {/* <TextField
          id="employee_password"
          label="Password"
          // className={classes.textField}
          // InputProps={{
          //     className: classes.input
          // }}
          type="password"
          name="employee_password"
          margin="normal"
          variant="outlined"
          required
          value = {this.state.input.employee_password}
          onChange = {this.handleChange}
          error = {this.state.errors.employee_password}
          helperText = {this.state.errors.employee_password}
        />
        <br/>
        <TextField
          id="employee_confirm_password"
          label="Confirm Password"
          // className={classes.textField}
          // InputProps={{
          //     className: classes.input
          // }}
          type="password"
          name="employee_confirm_password"
          margin="normal"
          variant="outlined"
          required
          value = {this.state.input.employee_confirm_password}
          onChange = {this.handleChange}
          error = {this.state.errors.employee_password}
          helperText = {this.state.errors.employee_password}
        /> */}
        <br/>


                
                    {/* <Typography className={classes.divider} />     */}
        <Button type="submit" color="primary" variant="contained">Submit</Button> 
          {/* <input type="submit" value="Submit"/> */}
          {/* <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
          <input accept="image/*"  id="icon-button-file" type="file" /> */}
            {/* Submit */}
          {/* </Button> */}
        </form>
      </div>
      </main>
    );
  }
}
  
export default Step2;