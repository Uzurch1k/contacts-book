import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectContactsLoading,
  selectContactsError,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import Section from '../../components/Layout/Section/Section';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';

import css from './ContactsPage.module.scss';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <div className={css.contacts}>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && !error && <Loader />}
        {!isLoading && error && <Error />}
      </div>
    </Section>
  );
};

export default ContactsPage;
