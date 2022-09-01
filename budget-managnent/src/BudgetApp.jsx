import { useEffect, useState } from 'react';
import addNewBudgetIcon from './assets/img/nuevo-gasto.svg';
import { BudgetList, FilterSpents, Modal } from './components';
import { formatDate, generateId } from './helpers';
import './styles/normalice.css';
import './styles/styles.css';
import { InitialButget } from './views';

const BudgetApp = () => {
  // TODO here build a custom hook
  const [ budget, setBudget ] = useState(Number(localStorage.getItem('budget')));
  const [ isValidBudget, setIsValidBudget ] = useState(false);

  const [ openModal, setOpenModal ] = useState(false);
  const [ animatedModal, setAnimatedModal] = useState(false);

  const [spent, setSpent] = useState(
    JSON.parse(localStorage.getItem('spent')) ?? []
  );

  const [editSpent, setEditSpent] = useState({});
  
  // TODO: Custom hook to filter feature
  const [filterSpentData, setFilterSpentData] = useState([]);
  const [spentFilterSelected, setSpentFilterSelected] = useState('');
  
  useEffect(() => {
    if (spentFilterSelected) {
      const allSpentForCategories = spent.filter(item => item.category === spentFilterSelected);
      setFilterSpentData(allSpentForCategories);
    }
  }, [spentFilterSelected])
  


  // TODO: custom hook to state persistence

  useEffect(() => {
    localStorage.setItem('budget', budget);
  }, [budget]);
  
  useEffect(() => {
    if(Number(localStorage.getItem('budget'))) {
      setIsValidBudget(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('spent', JSON.stringify(spent));
  }, [spent])

  useEffect(() => {
    if(Object.keys(editSpent).length > 0) {
      onAddNewButgetIcon();
    }
  }, [editSpent])
  
  const onAddNewButgetIcon = () => {
    setOpenModal(true);

    setTimeout(() => {
      setAnimatedModal(true)
    }, 400)
  }

  const setSavedSpent = (dataSpent) => {
    // Updated spent
    if( dataSpent.id ) {
      const updatedSpent = spent.map(item => {
        if(item.id === dataSpent.id) {
          return dataSpent
        }
        return item
      });
      setSpent(updatedSpent);
      setEditSpent({});
      return;
    }

    // New spent
    const date = Date.now();
    const id = generateId()
    dataSpent.id = id;
    dataSpent.date = formatDate(date);
    setSpent([...spent, dataSpent])
  }

  const deleteSpent = (id) => setSpent(spent.filter(item => item.id !== id));

  return (
    <div className={`${ openModal ? 'fijar' : ''}`}>
      <header>
        <InitialButget
          budget={budget}
          isValidBudget={isValidBudget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
          spent={spent}
        />
      </header>

      { isValidBudget && (
        <main>
          <FilterSpents
            setSpentFilterSelected={setSpentFilterSelected}
            spentFilterSelected={spentFilterSelected}
          />

          <BudgetList
            spent={spent}
            setEditSpent={setEditSpent}
            deleteSpent={deleteSpent}
            filterSpentData={filterSpentData}
            spentFilterSelected={spentFilterSelected}
          />

          <div className="nuevo-gasto">
            <img
              src={addNewBudgetIcon}
              alt='Add new Budget'
              onClick={onAddNewButgetIcon}
            />
          </div>
        </main>
      )}

      {
        openModal && (
          <Modal
            animatedModal={animatedModal}
            editSpent={editSpent}
            setOpenModal={setOpenModal}
            setAnimatedModal={setAnimatedModal}
            setSavedSpent={setSavedSpent}
            setEditSpent={setEditSpent}
          />
        )
      }
    </div>
  )
}

export default BudgetApp
