import { WithLayout } from '../../layout';
import { GetOneUserContainer } from '../../container';

const GetOneUser: React.FC = () => {
  return <GetOneUserContainer />
}

export const GetOneUserPage = WithLayout(GetOneUser);