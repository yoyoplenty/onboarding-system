import { getCurrentUser } from "../../utils/services/auth";

const Dashboard = () => {
  const user = getCurrentUser();

  return (
    <div className="ms-5 ps-5 fw-bold">
      Welcome onBoard {user.firstName} {user.lastName}
    </div>
  );
};

export default Dashboard;
