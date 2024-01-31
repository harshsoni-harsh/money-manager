// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-details">
      <div className="details balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <div className="h2">
            Rs <p data-testid="balanceAmount">{balance}</p>
          </div>
        </div>
      </div>
      <div className="details income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <div className="h2">
            Rs <p data-testid="incomeAmount">{income}</p>
          </div>
        </div>
      </div>
      <div className="details expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your expenses</p>
          <div className="h2">
            Rs <p data-testid="expensesAmount">{expenses}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
