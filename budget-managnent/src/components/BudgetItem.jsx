import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import iconSaving from '../assets/img/icono_ahorro.svg';
import iconHome from '../assets/img/icono_casa.svg';
import iconFood from '../assets/img/icono_comida.svg';
import iconExtraExpenses from '../assets/img/icono_gastos.svg';
import iconLeisure from '../assets/img/icono_ocio.svg';
import iconHelthy from '../assets/img/icono_salud.svg';
import iconSubscriptions from '../assets/img/icono_suscripciones.svg';
import { formatMoney } from '../helpers';

export const BudgetItem = ({
  category,
  spentField,
  date,
  amount,
  id,
  setEditSpent,
  deleteSpent
}) => {
  const icons = {
    saving: iconSaving,
    food: iconFood,
    home: iconHome,
    extraExpenses: iconExtraExpenses,
    leisure: iconLeisure,
    helthy: iconHelthy,
    subscriptions: iconSubscriptions
  }

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditSpent({ category, spentField, date, amount, id })}>
        Update
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => deleteSpent(id)}
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >

        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img
              src={icons[category]}
              alt={category}
            />

            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{spentField}</p>
              <p className="fecha-gasto">Agregado el <span>{date}</span></p>
            </div>
          </div>
          <p className="cantidad-gasto">{formatMoney(amount)}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}
