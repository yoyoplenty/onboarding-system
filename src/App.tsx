import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./App.css";
import { UserContextProvider } from "./context";

function App() {
  return (
    <main>
      <Toaster />
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </main>
  );
}

export default App;
