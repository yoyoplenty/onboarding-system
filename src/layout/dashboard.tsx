import { Outlet } from "react-router";
import { Panel } from "../shared";

const Dashboard = () => {
  return (
    <div>
      <Panel>
        <Outlet />
      </Panel>
    </div>
  );
};

export default Dashboard;
