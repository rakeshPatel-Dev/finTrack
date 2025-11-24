import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transations from "./pages/Transations";
import History from "./pages/History";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        {/* Public Route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />

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

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
