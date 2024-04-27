import css from './Search.module.scss';

const Search = ({ children }) => {
  return <div className={css.search}>{children}</div>;
};

export default Search;
