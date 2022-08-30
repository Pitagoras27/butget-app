import { NewBudgetAdd } from "./"

export const InitialButget = ({
  budget,
  isValidBudget,
  setBudget,
  setIsValidBudget
}) => {
  return (
    <NewBudgetAdd
      budget={budget}
      isValidBudget={isValidBudget}
      setBudget={setBudget}
      setIsValidBudget={setIsValidBudget}
    />
  )  
}
