import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../../redux/balanceSlice";

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);
  const handleDeposit = () => {
    dispatch(deposit(10));
  };
  const handleWithdraw = () => {
    dispatch(withdraw(5));
  };
  return (
    <div>
      <p>Balance:credits-{balance}</p>
      {/* <input type="number" /> */}
      <button onClick={handleDeposit}>Deposit credits</button>
      <button onClick={handleWithdraw}>Withdraw credits</button>
    </div>
  );
}
