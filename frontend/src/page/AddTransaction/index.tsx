import { WithLayout } from "../../layout";
import { AddTransactionContainer } from "../../container";

const AddTransaction: React.FC = () => {
  return <AddTransactionContainer />;
};

export const AddTransactionPage = WithLayout(AddTransaction);
