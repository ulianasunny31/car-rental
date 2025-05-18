import { useEffect } from 'react';
import CarList from '../../components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../redux/operations';
import {
  selectCarList,
  selectPage,
  selectTotalPages,
} from '../../redux/selectors';
import { FilterForm } from '../../components/FilterForm/FilterForm';
import { useSearchParams } from 'react-router-dom';
import { changeFilters, changePage } from '../../redux/slice';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCarList);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

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
    dispatch(changeFilters(filters));
    dispatch(getAllCars({ ...filters, limit: 8 }));
  }, [searchParams.toString()]);

  function handleClick() {
    dispatch(changePage());
    dispatch(getAllCars({ ...filters, page: Number(page) + 1 }));
  }
  return (
    <div className={css.catalog}>
      <FilterForm />
      <CarList handleClick={handleClick} cars={cars} />
      {page < totalPages && (
        <button onClick={handleClick} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
