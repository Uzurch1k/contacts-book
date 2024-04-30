import { Suspense } from 'react';

import AppBar from '../../AppBar/AppBar';
import Main from '../Main/Main';
import Footer from '../../Footer/Footer';
import Background from '../../Background/Background';
import { Loader } from '../../Loader/Loader';

import css from './Wrapper.module.scss';

const Wrapper = ({ children }) => {
  return (
    <>
      <div className={css.wrapper}>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Main>{children}</Main>
        </Suspense>
        <Footer />
      </div>
      <Background />
    </>
  );
};

export default Wrapper;
