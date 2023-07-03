import { useState } from "react";

function Search() {
  // 1. membuat sebuah function yg dapat ditrigger pd saat form di submit √

  // 2. kita harus capture data
  // 2a. dari dropdown dan jg dari
  // 2b. form input

  // 3. tampilkan data dari state
  // 3a. data dropdown
  // 3b. data form input
  const [dataDropdown, setDataDropdown] = useState("username");
  const [dataFormInput, setDataFormInput] = useState("");

  const [summary, setSummary] = useState({
    criteria: "",
    keyword: "",
  });

  const searchPlayer = (event) => {
    event.preventDefault();

    if (dataDropdown === "" || dataFormInput === "") {
      alert("form cannot be empty");
      return;
    }

    setSummary({
      criteria: dataDropdown,
      keyword: dataFormInput,
    });
  };

  return (
    <div className="p-2 card">
      <h2 className="text-center">Form Search Player</h2>

      <div>
        <form onSubmit={searchPlayer}>
          <div className="input-group">
            <select
              name="criteria"
              id="criteria"
              className="form-select"
              onChange={function (event) {
                setDataDropdown(event.target.value);
              }}
            >
              <option value="username">Username</option>
              <option value="email">Email</option>
              <option value="exp">Experience</option>
              <option value="lvl">Level</option>
            </select>
            <input
              type="search"
              className="form-control"
              id="search"
              placeholder="Keywords"
              onChange={function (event) {
                setDataFormInput(event.target.value);
              }}
            />
            <button type="submit" className="btn btn-success">
              Search
            </button>
          </div>
        </form>

        <h4 className="mt-3 text-center">Result:</h4>
        <table className="table table-hover">
          <tbody>
            <tr>
              <td>Criteria:</td>
              <td>
                <strong>{summary.criteria}</strong>
              </td>
            </tr>
            <tr>
              <td>Keyword:</td>
              <td>
                <strong>{summary.keyword}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Search;
