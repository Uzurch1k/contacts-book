import { TbError404 } from 'react-icons/tb';

import css from './Error.module.scss';

export const Error = () => {
  return (
    <div className={css.wrapp}>
      <TbError404 />
    </div>
  );
};
