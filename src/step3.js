import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


  
class Step3 extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
    this.validate();
  }

 
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["pan"] = ""
        input["gst"] = "";
  
        alert('Demo Form is submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
     
  
      // if (typeof input["name"] !== "undefined") {
      //   const re = /^\S*$/;
      //   if(input["employee_id"].length < 6 || !re.test(input["employee_id"])){ //change 6 with min char
      //       isValid = false;
      //       errors["employee_id"] = "Please enter valid id.";
      //   }
      // }
  
      if (!input["gst"]) {
        isValid = false;
        errors["gst"] = "Please enter gst.";
      }
  
      if (typeof input["gst"] !== "undefined") {
          
        var pattern = new RegExp(/([0-9]{2}[a-z]{4}([a-z]{1}|[0-9]{1}).[0-9]{3}[a-z]([a-z]|[0-9]){3})/i);
        if (!pattern.test(input["gst"])) {
          isValid = false;
          errors["gst"] = "Please enter valid gst.";
        }
      }

      if (!input["pan"]) {
        isValid = false;
        errors["pan"] = "Please enter pan.";
      }
  
      if (typeof input["pan"] !== "undefined") {
          
        var pattern = new RegExp(/([A-Z]){5}([0-9]){4}([A-Z]){1}$/i);
        if (!pattern.test(input["pan"])) {
          isValid = false;
          errors["pan"] = "Please enter valid pan.";
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
      <div class = "main">
        
        <div>
      <h1 align="center">STEP 3 : Documents</h1>
        <p>Complete the details below and upload relevant documents.</p>
        

        <form class="form" onSubmit={this.handleSubmit}>
        
        <h4>Pan Card Number</h4>
        <div class="icondiv3">
        <TextField
          id="pan"
          label="Pan"
          type="text"
          name = "pan"
          // InputLabelProps={{
          //   shrink: true,
          // }}
          variant="outlined"
          margin="normal"
          required
          value = {this.state.input.pan}
          onChange = {this.handleChange}
          error = {this.state.errors.pan}
        />
        {this.state.errors.pan ? <i class="fas fa-times-circle" id = "cross"></i> : <i class="fas fa-check-circle" id="check"></i>}

          {/* <i class="fas fa-check-circle" id="check"></i>
        <i class="fas fa-times-circle" id = "cross"></i> */}
        </div>

        <h4 align="left">GST Reg. No.</h4>
        <div class="icondiv3">
        <TextField
          id="gst"
          label="GST"
          type="text"
          name = "gst"
          // InputLabelProps={{
          //   shrink: true,
          // }}
          variant="outlined"
          margin="normal"
          required
          value = {this.state.input.gst}
          onChange = {this.handleChange}
          error = {this.state.errors.gst}
        />
        {this.state.errors.gst ? <i class="fas fa-times-circle" id = "cross"></i> : <i class="fas fa-check-circle" id="check"></i>}
        {/* <i class="fas fa-check-circle" id="check"></i> 
        <i class="fas fa-times-circle" id = "cross"></i> */}
        </div>

        <h4>Pan Card Upload</h4>
        <Button
        variant="contained"
        component="label"
        >
        Choose File
        <input
            type="file"
            hidden
        />
        </Button>
        <br/>
        <small>Note only pdf files are allowed(Max 4MB)</small>
        
        <h4>GSTIN Upload</h4>
        <Button
        variant="contained"
        component="label"
        >
        Choose File
        <input
            type="file"
            hidden
        />
        </Button>
        <br/>
        <small>Note only pdf files are allowed(Max 4MB)</small>
        
        <br/>


                
        <Button type="submit" color="primary" variant="contained">Submit</Button> 

        </form>
      </div>
      </div>
      </main>
    );
  }
}
  
export default Step3;