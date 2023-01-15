import { useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/filter/filterSlice';

import { Label, Input } from './FilterForm.styled';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    const text = event.target.value.toLowerCase();
    dispatch(getFilterValue(text));
  };
  return (
    <Label>
      Find contact by name:
      <Input
        type="text"
        name="filter"
        //value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        required
      />
    </Label>
  );
};
