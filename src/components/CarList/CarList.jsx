import CarItem from '../CarItem/CarItem';
import css from './CarList.module.css';

export const CarList = ({ cars }) => {
  console.log(cars);

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
