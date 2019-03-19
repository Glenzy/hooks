export default function validateForm(values) {
  console.log('validate')
  let errors = {};
  if (!values.email) {
    errors.email = 'email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = values.email + ' is an invalid email';
  }
  return errors;
}