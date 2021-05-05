import React from 'react'
import { Formik } from 'formik'
import "../styles.css"
import { formSchema } from '../Validations/UserValidation'

const SignupForm = () => {

  const renderForm = ({ handleBlur, handleChange, handleSubmit, values, errors, touched }) => {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName ? <div>{errors.firstName}</div> : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName ? <div>{errors.lastName}</div> : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email ? <div>{errors.email}</div> : null}

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: ''
      }}
      validationSchema={formSchema}
      onSubmit={values => {
          alert(JSON.stringify(values, null, 2))
        }
      }
    >
      {renderForm}
    </Formik>
  );
};

export default SignupForm;
