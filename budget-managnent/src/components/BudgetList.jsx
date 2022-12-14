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
            <h2>{`${(isFilteringCategories > 0) ? 'Spents Filter' : 'There are not expenses'}`}</h2>
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
            <h2>{`${(isSpents > 0) ? 'Spents' : 'There are not expenses'}`}</h2>
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