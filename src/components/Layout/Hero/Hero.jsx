import css from './Hero.module.scss';

const Hero = ({ children }) => {
  return <div className={css.hero}>{children}</div>;
};

export default Hero;
