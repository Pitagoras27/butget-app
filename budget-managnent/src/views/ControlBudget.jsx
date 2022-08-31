import { useEffect, useState } from "react";
import { formatMoney } from "../helpers";

export const ControlBudget = ({ budget, spent }) => {
  const [availableAmount, setAvailableAmount] = useState(budget);
  const [amountRest, setAmountRest] = useState(0);

  useEffect(() => {
    if(spent.length > 0) {
      const totalSpent = spent.reduce((acc, spent) => spent.amount + acc, 0);
      const availableResult = budget - totalSpent;
      setAmountRest(totalSpent);
      setAvailableAmount(availableResult);
    }
  }, [spent])
  

  return (
    <>    
      <h1>Expense Panel</h1>
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div></div>

        <div className="contenido-presupuesto">
          <p>
            <span>Budget:</span> {formatMoney(budget)}
          </p>

          <p>
            <span>Available:</span> {formatMoney(availableAmount)}
          </p>

          <p>
            <span>Spent Money:</span> {formatMoney(amountRest)}
          </p>
        </div>
      </div>
    </>
  )
}