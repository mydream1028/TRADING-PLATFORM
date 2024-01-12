import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { AddTransactionComponent } from "../../components/AddTransaction";
import { FormikHelpers } from "formik";

import {
  AppActions,
  AppDispatch,
  RootState,
  useAppSelector,
} from "../../store";
import { IAddTransaction } from "../../types";

export const AddTransactionContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useAppSelector((store: RootState) => store.user.users);

  useEffect(() => {
    dispatch(AppActions.loading.setNavNumber(2));
    dispatch(AppActions.user.getUserRequest());
  }, []);

  const onSubmit = (value: IAddTransaction, actions: FormikHelpers<IAddTransaction>) => {
    dispatch(AppActions.transaction.addTransactionRequest(value));
    actions.resetForm();
  };

  return <AddTransactionComponent users={users} onSubmit={onSubmit} />;
};
