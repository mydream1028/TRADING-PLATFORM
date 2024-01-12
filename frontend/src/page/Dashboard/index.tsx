import { WithLayout } from "../../layout";
import { DashboardContainer } from "../../container";

const Dashboard: React.FC = () => {
  return <DashboardContainer />;
};

export const DashboardPage = WithLayout(Dashboard);
