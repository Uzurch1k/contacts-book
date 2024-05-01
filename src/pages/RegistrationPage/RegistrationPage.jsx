import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/operations';

import Section from '../../components/Layout/Section/Section';

import toast, { Toaster } from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import clsx from 'clsx';
import css from './RegistrationPage.module.scss';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password must be less than 50 characters')
    .required('Password is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationPage = () => {
  const nameFieldId = nanoid();
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();
  const dispatch = useDispatch();

  // const notify = promise =>
  //   toast.promise(promise, {
  //     loading: 'Saving...',
  //     success: <b>Contact added!</b>,
  //     error: <b>Could not save!</b>,
  //   });

  const handleSubmit = async (values, actions) => {
    const { name, email, password } = values;
    // const myPromise = dispatch(
    //   register({
    //     name,
    //     email,
    //     password,
    //   })
    // );
    console.log({
      name,
      email,
      password,
    });
    actions.resetForm();
    // notify(myPromise);
  };

  const handleInputClass = (touched, error) =>
    clsx(css.input, {
      [css.errorInput]: touched && error,
    });

  return (
    <Section>
      <div className={css.registr}>
        <Formik
          initialValues={initialValues}
          validationSchema={FeedbackSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={css.form}>
              <div className={css.formbody}>
                <div>
                  <label className={css.label} htmlFor={nameFieldId}>
                    Name
                  </label>
                  <Field
                    className={handleInputClass(touched.name, errors.name)}
                    name="name"
                    id={nameFieldId}
                    placeholder="Name..."
                  />
                  <ErrorMessage
                    className={css.error}
                    name="name"
                    component="p"
                  />
                </div>

                <div>
                  <label className={css.label} htmlFor={emailFieldId}>
                    Email
                  </label>
                  <Field
                    className={handleInputClass(touched.email, errors.email)}
                    type="email"
                    name="email"
                    id={emailFieldId}
                    placeholder="Email..."
                  />
                  <ErrorMessage
                    className={css.error}
                    name="email"
                    component="p"
                  />
                </div>

                <div>
                  <label className={css.label} htmlFor={passwordFieldId}>
                    Password
                  </label>
                  <Field
                    className={handleInputClass(
                      touched.password,
                      errors.password
                    )}
                    type="password"
                    name="password"
                    id={passwordFieldId}
                    placeholder="Password..."
                  />
                  <ErrorMessage
                    className={css.error}
                    name="password"
                    component="p"
                  />
                </div>
              </div>

              <button className={css.btn} type="submit">
                Register
              </button>
            </Form>
          )}
        </Formik>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </Section>
  );
};

export default RegistrationPage;
