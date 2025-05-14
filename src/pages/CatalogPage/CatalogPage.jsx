import { useEffect } from 'react';
import CarList from '../../components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../redux/operations';
import { selectCarList } from '../../redux/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCarList);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <div>
      <p>Filter form</p>
      <CarList cars={cars} />
    </div>
  );
};

export default CatalogPage;
