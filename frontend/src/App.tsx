import { Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import Dashboard from "./pages/Vistorias";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/vistorias"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/vendedor"
        element={
          <PrivateRoute>
            <div>Página de Vendedor (em construção)</div>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
