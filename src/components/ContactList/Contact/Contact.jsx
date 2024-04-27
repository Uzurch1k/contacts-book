import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/contactsOps';

import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.scss';

const Contact = ({ searchContact }) => {
  const { id, name, number } = searchContact;

	const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.item}>
      <address className={css.address}>
        <p className={css.name}>
          <FaUser className={css.icon} />
          <span>{name}</span>
        </p>
        <a className={css.tel} href={`tel:${number}`}>
          <FaPhoneAlt className={css.icon} />
          <span>{number}</span>
        </a>
      </address>
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
