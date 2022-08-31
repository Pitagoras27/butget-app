import { useState } from 'react';
import { AlertMessage } from '../components';

export const NewBudgetAdd = ({ budget, isValidBudget, setBudget, setIsValidBudget }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const onChangeBudget = ({ target }) => setBudget(Number(target.value));

  const onSubmitBudget = (e) => {
    e.preventDefault();

    if(budget < 1) {
      setIsValidBudget(false);
      setErrorMessage('Budget is not valid!')
      return;
    }
    setIsValidBudget(true);
    setErrorMessage('');
    
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={onSubmitBudget}>
        <div className="campo">
          <label>Define Budget</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Add your budget"
            value={budget}
            onChange={onChangeBudget}
            />
        </div>
        <input type="submit" value="Send" />
        { errorMessage && <AlertMessage type="error">{errorMessage}</AlertMessage>}
      </form>
      
    </div>
  )
}