import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  selectContactsLoading,
  selectContactsError,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';

import Wrapper from '../Layout/Wrapper/Wrapper';
import Header from '../Header/Header';
import Main from '../Layout/Main/Main';
import Footer from '../Footer/Footer';
import Section from '../Layout/Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import Hero from '../Layout/Hero/Hero';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);

import './App.scss';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Hero>
        <Header />
        <ContactForm />
      </Hero>
      <Main>
        <Section>
          <SearchBox />
          <ContactList />
          {isLoading && !error && <Loader />}
          {!isLoading && error && <Error />}
        </Section>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default App;
