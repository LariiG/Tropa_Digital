import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import EmConstrucao from "./pages/EmConstrucao/EmConstrucao";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
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
            path="/eventos"
            element={
              <PrivateRoute>
                <EmConstrucao />
              </PrivateRoute>
            }
          />
          <Route
            path="/equipes"
            element={
              <PrivateRoute>
                <EmConstrucao />
              </PrivateRoute>
            }
          />
          <Route
            path="/inscricoes"
            element={
              <PrivateRoute>
                <EmConstrucao />
              </PrivateRoute>
            }
          />
          <Route
            path="/em-construcao"
            element={
              <PrivateRoute>
                <EmConstrucao />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
