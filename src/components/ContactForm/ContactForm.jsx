import { FaArrowDownLong } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/contacts/operations';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import clsx from 'clsx';

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
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

  const scrollUp = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleSubmit = (values, actions) => {
    scrollUp();
    const { name, number } = values;
    dispatch(
      addContact({
        name,
        number,
      })
    );
    actions.resetForm();
  };

  const handleClick = () => {
    scrollUp();
  };

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrolled(currentPosition > 600);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formClasses = clsx(css.form, { [css.scrolled]: scrolled });
  const downClasses = clsx(css.down, { [css.visually]: scrolled });

  return (
    <div className={css.wrapp}>
      <div className={css.info}>
        <h2>Welcome to the contact book</h2>
        <p>Enrich your contact list</p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        <Form className={formClasses}>
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

      <div className={downClasses}>
        <button onClick={handleClick} className={css.vector}>
          <span>
            <FaArrowDownLong />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
