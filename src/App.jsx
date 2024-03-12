import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
