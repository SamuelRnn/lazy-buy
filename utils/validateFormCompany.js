// company name
// Email
// Owner
// Country
// City
// Password
// CPassword


export function registerValidateCompany(values) {
    const errors = {};
  //Company Name
    if (!values.name) {
      errors.name = "Required Company Name";
    }
  
  //Country
  if (!values.country) {
    errors.country = "Required Country";
  }

//   Owner
  if (!values.owner) {
    errors.owner = "Required Owner";
  }
  
  //City
  if (!values.city) {
    errors.city = "Required City";
  } 
  
    // Email
    if (!values.email) {
      errors.email = "Required Email address";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
  
  // Password
    if (!values.password) {
      errors.password = "Required Password";
    } else if (values.password.length < 8 || values.password.length > 20) {
      errors.password = "Must be greater than 8 and less than 20 characters long";
    } else if (values.password.includes(" ")) {
      errors.password = "Invalid Password";
    }
  
  
  
    //cpasword
    if (!values.cpassword) {
      errors.cpassword = "Required Password";
    } else if (values.password !== values.cpassword) {
      errors.cpassword = "Password Doesn't Match...!";
    } else if (values.cpassword.includes(" ")) {
      errors.cpassword = "Invalid Confirm Password";
    }
  
    return errors;
  }
  
  