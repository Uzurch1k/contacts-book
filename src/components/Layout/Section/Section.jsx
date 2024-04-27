import css from './Section.module.scss';

const Section = ({ children }) => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.section__body}>{children}</div>
      </div>
    </div>
  );
};

export default Section;
