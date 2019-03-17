export default function validateForm(values) {
  let errors = {};
  const emailRegex = new RegExp('^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$');

  if (!values.email) {
    errors.email = 'email is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = values.email + ' is an invalid email';
  }
  return errors;
}