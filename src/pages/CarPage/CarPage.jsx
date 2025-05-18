import { useDispatch, useSelector } from 'react-redux';
import { selectChosenCar } from '../../redux/selectors';
import { getCarById } from '../../redux/operations';
import { useEffect } from 'react';
import CarFullInfo from '../../components/CarFullInfo/CarFullInfo';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import css from './CarPage.module.css';
import { addToFavs } from '../../redux/slice';

const CarPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const chosenCar = useSelector(selectChosenCar);

  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);

  function handleClick(car) {
    dispatch(addToFavs(car));
  }

  if (!chosenCar) {
    return <Loader />;
  }

  return (
    <div className={css.bigCarDetailsDiv}>
      <div className={css.leftCol}>
        <img className={css.carImage} src={chosenCar.img} alt="" />
        <div className={css.formDiv}>
          <h4>Book your car now</h4>
          <h5>Stay connected! We are always ready to help you.</h5>
          <form className={css.bookForm}>
            <input type="text" placeholder="Name*" />
            <input type="email" placeholder="Email*" />
            <input type="text" placeholder="Booking date" />
            <textarea type="text" placeholder="Comment" />
            <button>Send</button>
          </form>
        </div>
        <button onClick={handleClick(chosenCar)} className={css.addToFavBtn}>
          Add to favorites
        </button>
      </div>
      <div className={css.rightCol}>
        <CarFullInfo chosenCar={chosenCar} />
      </div>
    </div>
  );
};

export default CarPage;
