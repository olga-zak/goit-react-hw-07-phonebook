import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';

export const AddForm = ({ closeForm }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      addContact({
        name: event.target.elements.name.value,
        phone: event.target.elements.phone.value,
      })
    );
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="name" />
      </label>
      <label>
        <input type="text" name="phone" />
      </label>
      <button>Save</button>
    </form>
  );
};
