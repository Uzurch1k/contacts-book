import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

import NotFound from '../NotFound/NotFound';

import css from './ContactList.module.scss';
import Contact from './Contact/Contact';

const ContactList = () => {
  const contactsFilter = useSelector(selectFilteredContacts);
  const nameFilter = useSelector(selectNameFilter);

  return (
    <>
      {contactsFilter.length === 0 && nameFilter !== '' ? (
        <NotFound />
      ) : (
        <div className={css.wrapp}>
          <ul className={css.list}>
            {contactsFilter.map(item => (
              <Contact key={item.id} searchContact={item} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ContactList;
