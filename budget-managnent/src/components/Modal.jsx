import { useState } from 'react';
import closeModal from '../assets/img/cerrar.svg';
import { AlertMessage } from './AlertMessage';

export const Modal = ({
  animatedModal,
  setOpenModal,
  setAnimatedModal,
  setSavedSpent
}) => {
  const [spentField, setSpentField] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [messageError, setMessageError] = useState('')

  const onSubmitForm = (e) => {
    e.preventDefault();

    if(amount < 1) {
      setMessageError('Amount is not correct!');
      return;
    }

    const validation = [spentField, amount, category].includes('');

    if (validation) {
      setMessageError('All fields are mandatory!');
      return;
    }
    onCloseModal();
    setMessageError('');
    setSavedSpent({spentField, amount, category})
  }

  const onCloseModal = () => {
    setAnimatedModal(false);

    setTimeout(() => {
      setOpenModal(false);
    }, 400);
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={closeModal}
          alt="close modal"
          onClick={onCloseModal}
        />
      </div>
      <form
        className={`formulario ${animatedModal ? 'animar' : ''}`}
        onSubmit={onSubmitForm}
      >
        <legend>New Spent</legend>
        { messageError && <AlertMessage type="error">{messageError}</AlertMessage>}
        <div className="campo">
          <label htmlFor="nameSpent"> Spent Name </label>
          <input
            id="nameSpent"
            name="spent"
            type="text"
            placeholder="Name of spent"
            value={spentField}
            onChange={(e) => setSpentField(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="amountUser"> Amount </label>
          <input
            id="amountUser"
            name="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categorySpent"> Category </label>
          <select
            id="categorySpent"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Selection --</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="extraExpenses">Extra expenses</option>
            <option value="leisure">Leisure</option>
            <option value="helthy">Helthy</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>

        <input type="submit" value="New spent" />
      </form>
    </div>
  )
}