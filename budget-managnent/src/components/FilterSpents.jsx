export const FilterSpents = ({ spentFilterSelected, setSpentFilterSelected }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="categorySpent"> Filter Spents Category </label>
          <select
            value={spentFilterSelected}
            onChange={(e) => setSpentFilterSelected(e.target.value)}
          >
            <option value="">-- All Categories --</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="extraExpenses">Extra expenses</option>
            <option value="leisure">Leisure</option>
            <option value="helthy">Helthy</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
      </form>
    </div>
  )
}