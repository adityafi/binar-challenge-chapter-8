import { useState } from "react";

function Create() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exp, setExp] = useState(0);
  const [formData, setFormData] = useState([]);

  const createPlayer = (e) => {
    e.preventDefault();

    if (
      username === "" ||
      email === "" ||
      password === "" ||
      exp === "" ||
      exp === 0
    ) {
      alert("form cannot be empty");
      return;
    }

    const exist = formData.find((data) => {
      return data.username === username || data.email === email;
    });

    if (exist) {
      alert("username or email already exist");
      return;
    }

    setFormData((before) => {
      return [
        ...before,
        {
          username,
          email,
          exp,
        },
      ];
    });
    setUsername("");
    setEmail("");
    setPassword("");
    setExp(0);
  };

  return (
    <div className="p2 card">
      <h2 className="text-center">Form Create Player</h2>
      <div>
        <form action="#" onSubmit={createPlayer}>
          <label htmlFor="usernameCreate" className="form-label">
            Username
          </label>
          <input
            id="usernameCreate"
            required
            className="form-control"
            type="text"
            value={username}
            onChange={(e) => setUsername(() => e.target.value)}
          />
          <label htmlFor="emailCreate" className="form-label">
            Email
          </label>
          <input
            id="emailCreate"
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(() => e.target.value)}
          />
          <label htmlFor="passwordCreate" className="form-label">
            Password
          </label>
          <input
            id="passwordCreate"
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(() => e.target.value)}
          />
          <label htmlFor="expCreate" className="form-label">
            Experience
          </label>
          <input
            id="expCreate"
            min={1}
            className="form-control"
            type="number"
            value={exp}
            onChange={(e) => setExp(() => e.target.value)}
          />
          <div className="d-grid gap-2 my-3">
            <button type="submit" className="btn btn-block btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>

      <h3 className="text-center">Summary</h3>
      <table className="table table-hover card p-2">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Exp</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((player) => {
            return (
              <tr key={player.username}>
                <td>{player.username}</td>
                <td>{player.email}</td>
                <td>{player.exp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Create;
