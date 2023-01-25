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
      errors.name = "Company Name Required";
    }
  
  //Country
  if (!values.country) {
    errors.country = "Country Required";
  }

//   Owner
  if (!values.owner) {
    errors.owner = "Owner Required";
  }
  
  //City
  if (!values.city) {
    errors.city = "City Required";
  } 
  
    // Email
    if (!values.email) {
      errors.email = "Email address Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
  
  // Password
    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password.length < 8 || values.password.length > 20) {
      errors.password = "Must be greater than 8 and less than 20 characters long";
    } else if (values.password.includes(" ")) {
      errors.password = "Invalid Password";
    }
  
  
  
    //cpasword
    if (!values.cpassword) {
      errors.cpassword = "Password Required";
    } else if (values.password !== values.cpassword) {
      errors.cpassword = "Password Doesn't Match...!";
    } else if (values.cpassword.includes(" ")) {
      errors.cpassword = "Invalid Confirm Password";
    }
  
    return errors;
  }
  
  