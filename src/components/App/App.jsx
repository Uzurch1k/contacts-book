import { useEffect } from 'react';

import {
  selectContactsLoading,
  selectContactsError,
} from '../../redux/contactsSlice';
import { fetchContacts } from '../../redux/contactsOps';
import { useDispatch, useSelector } from 'react-redux';

import Wrapper from '../Layout/Wrapper/Wrapper';
import Header from '../Header/Header';
import Main from '../Layout/Main/Main';
import Footer from '../Footer/Footer';
import Section from '../Layout/Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import Search from '../Layout/Search/Search';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';

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
      <Header />
      <Main>
        <Section>
          <ContactForm />
          <Search>
            <SearchBox />
            <ContactList />
          </Search>
          {isLoading && !error && <Loader />}
          {!isLoading && error && <Error />}
        </Section>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default App;
