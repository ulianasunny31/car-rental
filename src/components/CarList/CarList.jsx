import CarItem from '../CarItem/CarItem';
import css from './CarList.module.css';

export const CarList = ({ cars }) => {
  if (cars.length === 0) {
    return <h1>No cars found</h1>;
  }

  return (
    <ul className={css.carList}>
      {cars.map((car) => {
        return (
          <li className={css.carItem} key={car.id}>
            <CarItem car={car} />
          </li>
        );
      })}
    </ul>
  );
};

export default CarList;
