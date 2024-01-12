import { WithLayout } from "../../layout";
import { AddUserContainer } from "../../container";

const AddUser: React.FC = () => {
  return <AddUserContainer />;
};

export const AddUserPage = WithLayout(AddUser);
