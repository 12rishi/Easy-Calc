import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCurrentValue from "./components/DisplayCurrentValue";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <div className="col-lg-6 mx-auto">
          <Header />
          <DisplayCurrentValue />
          <Buttons />
        </div>
      </div>
    </>
  );
}

export default App;
