import iconSaving from '../assets/img/icono_ahorro.svg';
import iconHome from '../assets/img/icono_casa.svg';
import iconFood from '../assets/img/icono_comida.svg';
import iconExtraExpenses from '../assets/img/icono_gastos.svg';
import iconLeisure from '../assets/img/icono_ocio.svg';
import iconHelthy from '../assets/img/icono_salud.svg';
import iconSubscriptions from '../assets/img/icono_suscripciones.svg';

export const BudgetItem = ({ category, spentField, date, amount }) => {
  const icons = {
    saving: iconSaving,
    food: iconFood,
    home: iconHome,
    extraExpenses: iconExtraExpenses,
    leisure: iconLeisure,
    helthy: iconHelthy,
    subscriptions: iconSubscriptions
  }
  console.log('in BudgetItem');
  return (
    <>    
      <div className="contenido-gasto">
        <img
          src={icons[category]}
          alt={category}
        />

        <div className="descripcion-gasto">
          <p className="categoria">{category}</p>
          <p className="nombre-gasto">{spentField}</p>
          <p className="fecha-gasto">{date}</p>
        </div>
      </div>
      <p className="cantidad-gasto">{amount}</p>
    </>
  )
}