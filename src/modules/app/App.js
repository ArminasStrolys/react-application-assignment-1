import Navi from "../navi/Navi"
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        <i style={{"color":'orange'}} className="fa-solid fa-person-digging"></i>
        Under maintenance
        <i style={{"color":'orange'}} className="fa-solid fa-person-digging"></i>
      </h1>
      <Navi />
    </div>
  );
}

export default App;
