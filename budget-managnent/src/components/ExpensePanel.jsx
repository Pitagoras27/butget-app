import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { formatMoney } from "../helpers";

export const ExpensePanel = ({ budget, availableAmount, amountRest}) => {
  const percentCalculated = () =>  (((budget - availableAmount) / budget) * 100).toFixed(2);

  return (
    <>
      <h1>Expense Panel</h1>
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
          <CircularProgressbar
            value={percentCalculated()}
            text={`${percentCalculated()}%`}
            styles={buildStyles({
              textColor: (percentCalculated() > 100) ? '#DC2626' : '#3b82f6',
              pathColor: percentCalculated() > 100 ? '#DC2626' : '#3b82f6'
            })}
          />
        </div>

        <div className="contenido-presupuesto">
          <p>
            <span>Budget:</span> {formatMoney(budget)}
          </p>

          <p className={`${ availableAmount < 0 ? 'negativo' : '' }`}>
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
