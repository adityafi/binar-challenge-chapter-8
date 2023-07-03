import Create from "./components/Create";
import Edit from "./components/Edit";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <div className="form-floating">
          <div className="py-2">
            <Create />
          </div>
          <div className="py-2">
            <Edit />
          </div>
          <div className="py-2">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
