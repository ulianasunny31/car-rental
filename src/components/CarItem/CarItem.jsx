import { Link } from 'react-router-dom';
import css from './CarItem.module.css';
const CarItem = ({ car }) => {
  const addressParts = car.address.split(',').map((str) => str.trim());
  const city = addressParts[addressParts.length - 2];
  const country = addressParts[addressParts.length - 1];

  const formattedMileage = `${car.mileage
    .toLocaleString('en-US')
    .replace(/,/g, ' ')} km`;

  return (
    <div className={css.mainCarInfoDiv}>
      <img src={car.img}></img>
      <div className={css.shortCarInfo}>
        <div className={css.mainCarDetails}>
          <h4>
            {car.brand}
            <span>{car.model}</span>, {car.year}
          </h4>
          <p>${car.rentalPrice}</p>
        </div>

        <div className={css.carDetails}>
          <div className={css.line}>
            <span>{city}</span>
            <span>{country}</span>
            <span>{car.rentalCompany}</span>
          </div>
          <div className={css.line}>
            <span>{car.type}</span>
            <span>{formattedMileage}</span>
          </div>
        </div>
      </div>
      <Link to={`/catalog/${car.id}`} className={css.readMoreLink}>
        Read more
      </Link>
    </div>
  );
};

export default CarItem;
