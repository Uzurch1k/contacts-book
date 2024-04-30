import Section from '../../components/Layout/Section/Section';

import css from './HomePage.module.scss';

const HomePage = () => {
  return (
    <Section>
      <div className={css.home}>
        <h2>Welcome to the contact book</h2>
        <p>Enrich your contact list</p>
      </div>
    </Section>
  );
};

export default HomePage;
