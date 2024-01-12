import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { AppActions, AppDispatch, RootState, useAppSelector } from "../../store";
import { DashboardComponent } from "../../components";

export const DashboardContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useAppSelector((store: RootState) => store.user.users);
  useEffect(() => {
    dispatch(AppActions.loading.setNavNumber(0));
    dispatch(AppActions.user.getUserRequest());
  }, []);
  return (
    <DashboardComponent users={users} />
  );
};
