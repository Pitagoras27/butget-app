import { useState } from 'react';
import addNewBudgetIcon from './assets/img/nuevo-gasto.svg';
import { Modal } from './components';
import './styles/normalice.css';
import './styles/styles.css';
import { InitialButget } from './views';

const BudgetApp = () => {
  // TODO here build a custom hook
  const [ budget, setBudget ] = useState(0);
  const [ isValidBudget, setIsValidBudget ] = useState(false);
  const [ openModal, setOpenModal ] = useState(false);
  const [ animatedModal, setAnimatedModal] = useState(false);

  const onAddNewButgetIcon = () => {
    setOpenModal(true);

    setTimeout(() => {
      setAnimatedModal(true)
    }, 400)
  }

  return (
    <>
      <header>
        <h1>Budget App</h1>
        <InitialButget
          budget={budget}
          isValidBudget={isValidBudget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      </header>

      { isValidBudget && (
        <div className="nuevo-gasto">
          <img
            src={addNewBudgetIcon}
            alt='Add new Budget'
            onClick={onAddNewButgetIcon}
          />
        </div>
      )}

      {
        openModal && (
          <Modal
            animatedModal={animatedModal}
            setOpenModal={setOpenModal}
            setAnimatedModal={setAnimatedModal}
          />
        )
      }
    </>
  )
}

export default BudgetApp
