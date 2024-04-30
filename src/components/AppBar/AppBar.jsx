import { useSelector } from 'react-redux';

// import { selectIsLoggedIn } from '../../redux/auth/selectors';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import github from '../../image/git-hub.jpg';
import css from './AppBar.module.scss';

const AppBar = () => {
  // const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.body}>
          <h1 className={css.title}>Contacts book</h1>
          <Navigation />
          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
          <UserMenu />
          <AuthNav />
          <a
            className={css.link}
            href="https://github.com/Uzurch1k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
