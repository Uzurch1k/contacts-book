import css from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.body}>
          <img src="/react.svg" alt="react" />
          <a
            className={css.link}
            href="https://github.com/Uzurch1k/goit-react-hw-08"
            target="_blank"
            rel="noopener noreferrer"
          >
            source files...
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
