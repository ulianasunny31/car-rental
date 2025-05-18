import css from './Loader.module.css';
import { ClockLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className={css.loader}>
      <ClockLoader color="#3470ff" />
    </div>
  );
};

export default Loader;
