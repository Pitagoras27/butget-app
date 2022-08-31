import { ControlBudget, NewBudgetAdd } from "./"

export const InitialButget = ({
  budget,
  isValidBudget,
  setBudget,
  setIsValidBudget
}) => {

  return (
    <>
      {
        isValidBudget ?
          (
            <ControlBudget />
          ) : (
          <NewBudgetAdd
            budget={budget}
            isValidBudget={isValidBudget}
            setBudget={setBudget}
            setIsValidBudget={setIsValidBudget}
          /> )
      }
    </>
  )  
}
