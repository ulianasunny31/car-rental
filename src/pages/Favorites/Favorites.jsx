import { useDispatch, useSelector } from 'react-redux';
import CarList from '../../components/CarList/CarList';
import { selectFav } from '../../redux/selectors';
import { resetFavs } from '../../redux/slice';
import css from './Favorites.module.css';

const Favorites = () => {
  const favorites = useSelector(selectFav);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetFavs());
  }

  return (
    <div className={css.favList}>
      <button onClick={handleClick}>Delete all</button>
      <CarList cars={favorites} />
    </div>
  );
};

export default Favorites;
