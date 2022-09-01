import { BudgetItem } from "./BudgetItem";

export const BudgetList = ({
  spent,
  setEditSpent,
  deleteSpent,
  filterSpentData,
  spentFilterSelected 
}) => {
  const isFilteringCategories = Object.keys(filterSpentData).length;
  const isSpents = Object.keys(spent).length;

  return (
    <div className="listado-gastos contenedor">
      
      {
        spentFilterSelected ? (
          <>
            <h2>{`${(isFilteringCategories > 0) ? 'Spent List' : 'Don\'t spents to show'}`}</h2>
            {filterSpentData.map((spentDone) => (
              <BudgetItem
                key={spentDone.id}
                { ...spentDone }
                setEditSpent={setEditSpent}
                deleteSpent={deleteSpent}
              />
            ))}
          </>
        ) : (
          <>
            <h2>{`${(isSpents > 0) ? 'Category Spents' : 'Don\'t spents exists'}`}</h2>
            {spent.map((spentDone) => (
              <BudgetItem
                key={spentDone.id}
                { ...spentDone }
                setEditSpent={setEditSpent}
                deleteSpent={deleteSpent}
              />
            ))}
          </>
        )
        
      }
    </div>
  )
}