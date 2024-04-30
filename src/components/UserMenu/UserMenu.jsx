import { useDispatch, useSelector } from 'react-redux';
// import { logOut } from '../../redux/auth/operations';
// import { selectUser } from '../../redux/auth/selectors';

import css from './UserMenu.module.scss';

const UserMenu = () => {
  // const dispatch = useDispatch();
  // const { user } = useSelector(selectUser);

  return (
    <div className={css.usermenu}>
      {/* <p className={css.name}>Welcome, {user.name}</p>
      <button type="button" className={css.btn} onClick={() => dispatch(logOut())}>
        Logout
      </button> */}
      <p className={css.name}>Welcome, User</p>
      <button type="button" className={css.btn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
