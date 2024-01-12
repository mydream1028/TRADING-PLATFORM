import { FaRegUserCircle } from "react-icons/fa";
import { RiUserAddLine } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  AppActions,
  AppDispatch,
  RootState,
  useAppSelector,
} from "../../store";

import { PATH } from "../../consts";
import { NavbarComponent } from "../../components";

export const NavbarContainer: React.FC = () => {
  const list = [
    { icon: <FaRegUserCircle />, label: "Users", url: PATH.DASHBOARD },
    { icon: <RiUserAddLine />, label: "Add User", url: PATH.ADDUSER },
    {
      icon: <AiOutlineTransaction />,
      label: "Add Transaction",
      url: PATH.ADDTRANSACTION,
    },
  ];
  const dispatch = useDispatch<AppDispatch>();
  const navState = useAppSelector((store: RootState) => store.loading.navState);
  return (
    <NavbarComponent
      list={list}
      onClick={(index: number) =>
        dispatch(AppActions.loading.setNavNumber(index))
      }
      navState={navState}
    />
  );
};
