import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import MyCards from "./components/my-cards";
import NavBar from "./components/navbar";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpBiz from "./components/signupBiz";
import SignOut from "./components/signout";
import CreateCard from "./components/creatCard";
import ProtectedRoute from "./components/common/protectedRoute";
import DeleteCard from "./components/deleteCard";
import EditCard from "./components/editCard";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <ToastContainer />
      <header>
        <NavBar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="sign-up" element={<SignUp redirect="/sign-in" />} />
          <Route path="/sign-in" element={<SignIn redirect="/" />} />
          <Route path="/sign-out" element={<SignOut redirect="/" />} />
          <Route
            path="/sign-up-biz"
            element={<SignUpBiz redirect="/create-card" />}
          />
          <Route
            path="my-cards/create-card"
            element={
              <ProtectedRoute bizOnly>
                <CreateCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards/edit/:id"
            element={
              <ProtectedRoute bizOnly>
                <EditCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards/delete/:id"
            element={
              <ProtectedRoute bizOnly>
                <DeleteCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards"
            element={
              <ProtectedRoute bizOnly>
                <MyCards />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
