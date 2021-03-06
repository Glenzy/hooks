import {
  useState,
  useEffect
} from 'react';
const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event && event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  }

  const handleChange = (event) => {
    event.persist();
    setValues({
      ...values,
      [event.target.name]: [event.target.value]
    });
    setErrors(validate(values));
  }

  const handleBlur = (event) => {
    event.persist();
    setValues({
      ...values,
      [event.target.name]: [event.target.value]
    });
    setErrors(validate(values));
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors
  }
}

export default useForm;