
import { formatMoney } from "../helpers";

export const ExpensePanel = ({ budget, availableAmount, amountRest}) => {
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
