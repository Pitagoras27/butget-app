import { useState } from 'react'
import './styles/normalice.css'
import './styles/styles.css'
import { InitialButget } from './views'

const BudgetApp = () => {
  // TODO here build a custom hook
  const [ budget, setBudget ] = useState(0);
  const [ isValidBudget, setIsValidBudget ] = useState(false);

  return (
    <header>
      <h1>Budget App</h1>
      <InitialButget
        budget={budget}
        isValidBudget={isValidBudget}
        setBudget={setBudget}
        setIsValidBudget={setIsValidBudget}
      />
    </header>
  )
}

export default BudgetApp
