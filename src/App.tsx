import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./App.css";

function App() {
  return (
    <main>
      <Toaster />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
