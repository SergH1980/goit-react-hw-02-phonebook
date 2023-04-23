import React, { Component } from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const SignupSchem = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too long!')
    .required(`Please enter valid information`),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too long!')
    .required(`Please enter valid information`),
});

export class ContactForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={SignupSchem}
        onSubmit={(values, { resetForm }) => {
          this.props.onAdd({ ...values, id: nanoid() });
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
          <label htmlFor="number">Number</label>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
          <Field name="submit" type="submit" value="Add contact"></Field>
        </Form>
      </Formik>
    );
  }
}

// notify = data => toast.warn('{data} is already in contacts');
