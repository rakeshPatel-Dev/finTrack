import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transations from "./pages/Transations";
import History from "./pages/History";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Settings from "./pages/Setting";
import { Toaster } from "react-hot-toast";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route element={<MainLayout />}>
          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transaction"
            element={
              <ProtectedRoute>
                <Transations />
              </ProtectedRoute>
            }
          />
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <PageNotFound />
              </ProtectedRoute>
            } />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Public Route without header/footer */}
        <Route path="/signup" element={<Signup />} />

        {/* Fallback */}
      </Routes>

    </div>
  );
};

export default App;
