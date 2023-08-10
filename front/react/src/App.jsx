import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Footer from "./Footer.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="h-[calc(100vh-128px)] bg-vine-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
