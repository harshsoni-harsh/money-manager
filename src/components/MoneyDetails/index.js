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
          <p className="h2" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="details income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p className="h2" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="details expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your expenses</p>
          <div className="h2" data-testid="expensesAmount">
            Rs {expenses}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
