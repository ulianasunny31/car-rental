import { useDispatch, useSelector } from 'react-redux';
import { selectChosenCar } from '../../redux/selectors';
import { getCarById } from '../../redux/operations';
import { useEffect } from 'react';
import CarFullInfo from '../../components/CarFullInfo/CarFullInfo';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import css from './CarPage.module.css';

const CarPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const chosenCar = useSelector(selectChosenCar);

  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);

  if (!chosenCar) {
    return <Loader />;
  }

  return (
    <div className={css.bigCarDetailsDiv}>
      <img className={css.carImage} src={chosenCar.img} alt="" />
      <CarFullInfo chosenCar={chosenCar} />
      <form>
        <h4>Book your car now</h4>
        <h5>Stay connected! We are always ready to help you.</h5>
        <input type="text" placeholder="Name*" />
        <input type="email" placeholder="Email*" />
        <input type="text" placeholder="Booking date" />
        <input type="text" placeholder="Comment" />
      </form>
    </div>
  );
};

export default CarPage;
