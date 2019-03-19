import React from 'react'
import useForm from './useForm';
import validate from './form.validation-rules';
const Form = () => {

  const submit = () => console.log('Submited values', values);
  const { values, errors, handleSubmit, handleChange, handleBlur } = useForm(submit, validate);
  const { email, password } = { ...values };
  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    className={`input ${errors.email && 'is-danger'}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email || ''}
                    autoComplete="email"
                    onBlur={handleBlur}
                  />
                  {errors.email && <p className="has-text-danger">{errors.email}</p>}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className="input" type="password" name="password" onChange={handleChange} value={password || ''} autoComplete="current-password" />
                </div>
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;