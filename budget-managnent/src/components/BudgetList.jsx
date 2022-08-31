import { BudgetItem } from "./BudgetItem"

export const BudgetList = ({ spent }) => {
  console.log({spent})
  return (
    <div className="listado-gastos contenedor">
      <h2>Spent List</h2>
      {
        spent.map((spentDone) => (
          <BudgetItem
            { ...spentDone }
          />
        ))
      }
    </div>
  )
}