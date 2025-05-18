import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrands, selectFilters } from '../../redux/selectors';
import { useEffect } from 'react';
import { getAllCars, getBrands } from '../../redux/operations';
import css from './FilterForm.module.css';
import { changeFilters } from '../../redux/slice';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const navigate = useNavigate();
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  function handleSubmit({ brand, price, mileFrom, mileTo }) {
    const filters = {
      brand,
      rentalPrice: price,
      minMileage: mileFrom,
      maxMileage: mileTo,
    };

    const searchParams = createSearchParams(
      Object.entries(filters).filter(([, v]) => v !== '')
    );

    navigate({
      pathname: '/catalog',
      search: `${searchParams.toString()}`,
    });

    dispatch(changeFilters(filters));

    dispatch(getAllCars(filters));
  }

  return (
    <div className={css.formHeader}>
      <Link className={css.favLink} to="/favorites">
        Favorites
      </Link>
      <Formik
        enableReinitialize
        initialValues={{
          brand: filters.brand,
          price: filters.rentalPrice,
          mileFrom: filters.minMileage,
          mileTo: filters.maxMileage,
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.filterForm}>
          <div>
            <label htmlFor="brands">Car brand</label>

            <Field as="select" name="brand" id="brand">
              <option value="" disabled hidden>
                Choose a brand
              </option>
              {brands.map((brand) => {
                return (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                );
              })}
            </Field>
          </div>
          <div>
            <label htmlFor="price">Price/ 1 hour</label>
            <Field as="select" name="price" id="price">
              <option value="" disabled hidden>
                Choose a price
              </option>
              {[30, 40, 50, 60, 70, 80, 90, 100].map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </Field>
          </div>

          <div>
            <label htmlFor="mileage">Car mileage / km</label>
            <div className={css.inputsDiv}>
              <div className={css.mileageInputDiv}>
                <label className={css.mileFromLabel}>From</label>
                <Field name="mileFrom" className={css.mileFromInput}></Field>
              </div>
              <div className={css.mileageInputDiv}>
                <label className={css.mileToLabel}>To</label>
                <Field className={css.mileToInput} name="mileTo"></Field>
              </div>
            </div>
          </div>

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
