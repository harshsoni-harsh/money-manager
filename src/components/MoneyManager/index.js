import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      amount: '',
      type: 'INCOME',
      transactionsList: [],
    }
  }

  titleChange = e => this.setState({title: e.target.value})

  amountChange = e => {
    this.setState({amount: e.target.value})
  }

  typeChange = e => {
    this.setState({type: e.target.value})
  }

  addTransaction = e => {
    e.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      titleVal: title,
      amountVal: parseInt(amount),
      typeVal: type,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
    }))
  }

  onDelete = id => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(o => o.id !== id),
    }))
  }

  render() {
    const {title, amount, type, transactionsList} = this.state
    let expenses
    let income
    if (transactionsList.length !== 0) {
      expenses = transactionsList
        .filter(o => o.typeVal === 'EXPENSES')
        .map(o => o.amountVal)
        .reduce((acc, curr) => acc + curr, 0)
      income = transactionsList
        .filter(o => o.typeVal !== 'EXPENSES')
        .map(o => o.amountVal)
        .reduce((acc, curr) => acc + curr, 0)
    } else {
      expenses = 0
      income = 0
    }
    const balance = income - expenses
    return (
      <div className="body">
        <div className="header">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="container">
          <form onSubmit={this.addTransaction}>
            <h3>Add Transaction</h3>
            <label htmlFor="titleInput">TITLE</label>
            <input
              placeholder="TITLE"
              id="titleInput"
              value={title}
              onChange={this.titleChange}
            />
            <label htmlFor="amountInput">AMOUNT</label>
            <input
              placeholder="AMOUNT"
              id="amountInput"
              value={amount}
              onChange={this.amountChange}
            />
            <select value={type} onChange={this.typeChange}>
              {transactionTypeOptions.map(o => (
                <option id={o.optionId} key={o.optionId} value={o.optionId}>
                  {o.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Add</button>
          </form>
          <div>
            <h3>History</h3>
            <div className="historyHeading">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
              <p> </p>
            </div>
            <ul>
              {transactionsList.map(o => (
                <TransactionItem
                  key={o.id}
                  uniqueId={o.id}
                  obj={o}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
