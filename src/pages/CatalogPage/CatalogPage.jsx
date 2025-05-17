import { useEffect } from 'react';
import CarList from '../../components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../redux/operations';
import { selectCarList } from '../../redux/selectors';
import { FilterForm } from '../../components/FilterForm/FilterForm';
import { useSearchParams } from 'react-router-dom';
import { changeFilters } from '../../redux/slice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCarList);

  const [searchParams] = useSearchParams();
  const filters = {
    brand: searchParams.get('brand') || '',
    rentalPrice: searchParams.get('rentalPrice')
      ? Number(searchParams.get('rentalPrice'))
      : '',
    minMileage: searchParams.get('minMileage')
      ? Number(searchParams.get('minMileage'))
      : '',
    maxMileage: searchParams.get('maxMileage')
      ? Number(searchParams.get('maxMileage'))
      : '',
  };
  useEffect(() => {
    console.log('filters from URL', filters);
    dispatch(changeFilters(filters));
    dispatch(getAllCars(filters));
  }, [searchParams.toString()]);

  return (
    <div>
      <FilterForm />
      <CarList cars={cars} />
    </div>
  );
};

export default CatalogPage;
