import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';


  
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
    this.validate();
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
        input["address"] = "";
        input["number"] = "";
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
        errors["name"] = "Please enter name.";
      }

      if (!input["address"]) {
        isValid = false;
        errors["address"] = "Please enter address.";
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
          
        var pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);
        if (!pattern.test(input["employee_email"])) {
          isValid = false;
          errors["employee_email"] = "Please enter valid email address.";
        }
      }

      if (typeof input["number"] !== "undefined") {
          
        let pattern = new RegExp(/^[0]?[789]\d{9}$/);
        if (!pattern.test(input["number"])) {
          isValid = false;
          errors["number"] = "Please enter valid Mobile no..";
        }
      }
  
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <main >
        <div class="main">
      <div>
        <h1 align="center">STEP 2 : Contact Information</h1>
        <p>Confirm the following details and hit proceed to continue.</p>
        <p>To revise details, just click on the box and re-type the information.</p>
        

        <form class="form" onSubmit={this.handleSubmit}>
         <div class="icondiv3">
          <TextField
            id="name"
            label="Authorised person name"
            // className={classes.textField}
            // InputProps={{
            //     className: classes.input
            // }}
            type="text"
            name="name"
            margin="normal"
            variant="outlined"
            style={{width : 300}}
            required
            autoFocus
            value = {this.state.input.name}
            onChange = {this.handleChange}
            error = {this.state.errors.name}
            helperText = {this.state.errors.name}
          />
          {this.state.errors.name ? <i class="fas fa-times-circle" id = "cross"></i> : <i class="fas fa-check-circle" id="check"></i>}
         </div>

        <div class="icondiv3">
        <TextField
          id="employee_email"
          label="Email"
          // className={classes.textField}
          // InputProps={{
          //     className: classes.input
          // }}
          type="email"
          name="employee_email"
          style={{width : 300}}
          autoComplete="email"
          margin="normal"
          variant="outlined"
          required
          value = {this.state.input.employee_email}
          onChange = {this.handleChange}
          error = {this.state.errors.employee_email}
          helperText = {this.state.errors.employee_email}
        />
        {this.state.errors.employee_email ? <i class="fas fa-times-circle" id = "cross"></i> : <i class="fas fa-check-circle" id="check"></i>}

          {/* <i class="fas fa-check-circle" id="check"></i>
        <i class="fas fa-times-circle" id = "cross"></i> */}
        </div>

        <div class="icondiv3">
        <TextField
          id="number"
          label="Number"
          type="tel"
          name = "number"
          // InputLabelProps={{
          //   shrink: true,
          // }}
          variant="outlined"
          style={{width : 300}}
          margin="normal"
          required
          value = {this.state.input.number}
          onChange = {this.handleChange}
          error = {this.state.errors.number}
        />
        {this.state.errors.number ? <i class="fas fa-times-circle" id = "cross"></i> : <i class="fas fa-check-circle" id="check"></i>}
        </div>
        

      <div class="icondiv3">
        <TextField
          id="address"
          label="Address"
          type="text"
          name = "address"
          style={{marginLeft : 400}}
          // InputLabelProps={{
          //   shrink: true,
          // }}
          variant="outlined"
          style={{width : 300}}
          margin="normal"
          required
          value = {this.state.input.address}
          onChange = {this.handleChange}
        />
        {this.state.errors.address ? <i class="fas fa-times-circle" id = "cross"></i> : <i class="fas fa-check-circle" id="check"></i>}

        {/* <i class="fas fa-check-circle" id="check"></i>
        <i class="fas fa-times-circle" id = "cross"></i> */}
        </div>


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
          style={{width : 300}}
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


                
        <Button  type="submit" color="primary" variant="contained" style={{marginTop : 20}}>PROCEED</Button> 

        </form>
      </div>
      </div>
      </main>
    );
  }
}
  
export default Step2;