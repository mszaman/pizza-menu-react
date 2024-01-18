import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-[900px] px-8 pb-16 pt-8">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
