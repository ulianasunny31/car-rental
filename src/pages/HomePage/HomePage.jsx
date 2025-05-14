import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import carImage from '../../assets/big-car-img.jpg';

const HomePage = () => {
  return (
    <div className={css.homePageDiv}>
      <img src={carImage} alt="Car Image" />
      <div className={css.homepageContent}>
        <h1>Find your perfect rental car</h1>
        <h2>Reliable and budget-friendly rentals for any journey</h2>
        <Link to="/catalog" className={css.homeLink}>
          View Catalog
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
