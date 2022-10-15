import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import "./App.css";

function App() {
  return (
    <div className="w-screen overflow-hidden bg-gray-800">
      <NavBar />
      <br />
      <Cards />
    </div>
  );
}

export default App;
