// FirstName
// Last Name
//Email
//User Name
// Password
// Confirm password

export function registerValidate(values) {
  const errors = {};
//userName
  if (!values.userName) {
    errors.userName = "UserName Required";
  }

//FirstName
if (!values.firstname) {
  errors.firstname = "Required First Name";
}


//LastName
if (!values.lastname) {
  errors.lastname = "Last Name Required";
} 

  // Email
  if (!values.email) {
    errors.email = "Email Address Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }


// Password
  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than 8 and less than 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Password Invalid";
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



