import { ITransaction, IUser } from "../../types";
import { formatDate } from "../../utils/formatDate";

interface GetOneUserProps {
  transaction: ITransaction[];
  user: IUser | null;
}

export const GetOneUserComponent: React.FC<GetOneUserProps> = ({
  transaction,
  user,
}) => {
  return (
    <div className="bg-white h-full rounded-lg px-10 py-10">
      <h1 className="text-center text-4xl font-bold">User Details</h1>
      {user ? (
        <div className="text-center text-xl flex flex-col gap-5 p-5">
          <div>name: {user.name}</div>
          <div>token: {user.token}</div>
          <div>createdDate: {formatDate(user.createdDate)}</div>
        </div>
      ) : (
        <div className="text-center p-5">No user information</div>
      )}
      <h3 className="text-center text-4xl font-bold">Transactions</h3>
      <div className="text-center text-xl flex flex-col gap-5 p-5">
        {transaction.map((item, index) => (
          <div key={index}>
            {item.sender.name} sent {item.amount} tocos to {item.receiver.name}
          </div>
        ))}
      </div>
    </div>
  );
};
