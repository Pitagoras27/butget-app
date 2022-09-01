import { useEffect, useState } from "react";
import { ExpensePanel } from "../components";

export const ControlBudget = ({ budget, spent, setSpent, setBudget }) => {
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
      <ExpensePanel
        budget={budget}
        availableAmount={availableAmount}
        amountRest={amountRest}
        setSpent={setSpent}
        setBudget={setBudget}
      />
    </>
  )
}