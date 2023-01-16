export function registerValidateCompanyAccount(values) {
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

  return errors;
}
