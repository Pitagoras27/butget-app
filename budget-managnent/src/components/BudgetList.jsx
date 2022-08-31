import { BudgetItem } from "./BudgetItem";

export const BudgetList = ({ spent, setEditSpent, deleteSpent }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>Spent List</h2>
      {
        spent.map((spentDone) => (
          <BudgetItem
            key={spentDone.id}
            { ...spentDone }
            setEditSpent={setEditSpent}
            deleteSpent={deleteSpent}
          />
        ))
      }
    </div>
  )
}