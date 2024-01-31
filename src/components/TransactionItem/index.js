// Write your code here
import './index.css'

const TransactionItem = props => {
  const {obj, onDelete, uniqueId} = props
  const {titleVal, amountVal, typeVal} = obj
  const onDeleteTr = () => {
    onDelete(uniqueId)
  }
  return (
    <li>
      <p>{titleVal}</p>
      <p>Rs {amountVal}</p>
      <p>{typeVal === 'INCOME' ? 'Income' : 'Expenses'}</p>
      <button type="button" onClick={onDeleteTr} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
