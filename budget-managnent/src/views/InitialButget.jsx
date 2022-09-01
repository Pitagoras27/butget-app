import { ControlBudget, NewBudgetAdd } from "./"

export const InitialButget = ({
  budget,
  spent,
  isValidBudget,
  setBudget,
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
              filterSpentData={filterSpentData}
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
