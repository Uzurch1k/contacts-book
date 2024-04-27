import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/contactsOps';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import css from './ContactForm.module.scss';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Name must be between 3 and 50 digits')
    .max(50, 'Name must be between 3 and 50 digits')
    .required('Required'),
  number: Yup.string()
    .matches(/^[0-9]{3,50}$/, 'Phone number must be between 3 and 50 digits')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    dispatch(
      addContact({
        name,
        number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css['form-boby']}>
          <div>
            <label className={css.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={css.input}
              name="name"
              id={nameFieldId}
              placeholder="Name..."
            />
            <ErrorMessage className={css.error} name="name" component="p" />
          </div>

          <div>
            <label className={css.label} htmlFor={numberFieldId}>
              Number
            </label>
            <Field
              className={css.input}
              type="number"
              name="number"
              id={numberFieldId}
              placeholder="Number..."
            />
            <ErrorMessage className={css.error} name="number" component="p" />
          </div>
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
