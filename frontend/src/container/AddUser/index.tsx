import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppActions, AppDispatch } from "../../store";
import { AddUserComponent } from "../../components";
import { IAddUser } from "../../types";
import { FormikHelpers } from "formik";

export const AddUserContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(AppActions.loading.setNavNumber(1));
  }, []);

  const onSubmit = (value: IAddUser, actions: FormikHelpers<IAddUser>) => {
    dispatch(AppActions.user.addUserRequest(value));
    actions.resetForm();
  };

  return <AddUserComponent onSubmit={onSubmit} />;
};
