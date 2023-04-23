import { appStore } from "../../store";

const Dashboard = () => {
  const store = appStore();
  const user = store.authUser;

  return (
    <div className="ms-5 ps-5 fw-bold">
      Welcome onBoard {user.firstName} {user.lastName}
    </div>
  );
};

export default Dashboard;
