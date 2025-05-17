import css from './CarFullInfo.module.css';
import calender from '../../assets/calendar.svg';
import location from '../../assets/location.svg';
import car from '../../assets/car.svg';
import fuel from '../../assets/fuel.svg';
import gear from '../../assets/gear.svg';
import checkCircle from '../../assets/check-circle.svg';

const CarFullInfo = ({ chosenCar }) => {
  const {
    brand,
    model,
    year,
    mileage,
    id,
    rentalPrice,
    description,
    address,
    rentalConditions,
    type,
    engineSize,
    fuelConsumption,
    accessories,
    functionalities,
  } = chosenCar;

  const addressParts = address.split(',').map((str) => str.trim());
  const city = addressParts[addressParts.length - 2];
  const country = addressParts[addressParts.length - 1];

  const formattedMileage = `${mileage
    .toLocaleString('en-US')
    .replace(/,/g, ' ')} km`;

  const accessoriesAndFunctionalities = accessories.concat(functionalities);

  return (
    <div className={css.carInfoText}>
      <div className={css.nameYearDiv}>
        <h4>
          {brand} <span>{model}</span>, {year}
        </h4>
        <p>Id: {id}</p>
      </div>

      <div className={css.cityMileageDiv}>
        <p className={css.locationP}>
          <img src={location} className={css.locationIcon} />
          {city}, {country}
        </p>

        <p>Mileage: {formattedMileage}</p>
      </div>

      <p className={css.rentalPriceP}>${rentalPrice}</p>
      <p className={css.descriptionP}>{description}</p>

      <ul className={css.conditionsList}>
        <h3>Rental Conditions</h3>
        {rentalConditions.map((condition) => {
          return (
            <li key={condition}>
              <img src={checkCircle} />
              {condition}
            </li>
          );
        })}
      </ul>

      <ul className={css.specificationsList}>
        <h3>Car Specifications:</h3>
        <li>
          <img src={calender} />
          Year: {year}
        </li>
        <li>
          <img src={car} />
          Type: {type}
        </li>
        <li>
          <img src={fuel} />
          Fuel consumption: {fuelConsumption}
        </li>
        <li>
          <img src={gear} />
          Engine size: {engineSize}
        </li>
      </ul>

      <ul className={css.accessFunctionList}>
        <h3>Accessories and functionalities:</h3>
        {accessoriesAndFunctionalities.map((item) => {
          return (
            <li key={item}>
              <img src={checkCircle} />
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CarFullInfo;
