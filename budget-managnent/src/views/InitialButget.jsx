import { ControlBudget, NewBudgetAdd } from "./"

export const InitialButget = ({
  budget,
  spent,
  isValidBudget,
  setBudget,
  setSpent,
  setIsValidBudget,
  filterSpentData
}) => {

  return (
    <>
      {
        isValidBudget ?
          (
            <ControlBudget
              budget={budget}
              spent={spent}
              setBudget={setBudget}
              setSpent={setSpent}
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
