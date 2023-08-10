import Header from "./Header.jsx";
import SignIn from "./pages/SignIn.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-128px)] bg-vine-background">
        <SignIn />
      </main>
      <Footer />
    </>
  );
};

export default App;
