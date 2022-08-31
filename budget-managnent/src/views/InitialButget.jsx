import { ControlBudget, NewBudgetAdd } from "./"

export const InitialButget = ({
  budget,
  spent,
  isValidBudget,
  setBudget,
  setIsValidBudget
}) => {

  return (
    <>
      {
        isValidBudget ?
          (
            <ControlBudget
              budget={budget}
              spent={spent}
            />
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
