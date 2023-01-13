import { useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/filter/filterSlice';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    const text = event.target.value.toLowerCase();
    dispatch(getFilterValue(text));
  };
  return (
    <label>
      Find contact by name:
      <input
        type="text"
        name="filter"
        //value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        required
      />
    </label>
  );
};
