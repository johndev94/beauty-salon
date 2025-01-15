import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bcrypt from "bcryptjs"; // Use import for bcryptjs
import { useAuth } from "./AuthContext"; // Import the AuthContext

const salt = bcrypt.genSaltSync(10);

interface User {
  id: number;
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { login } = useAuth(); // Get login function from context
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/login")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = users.find((user) => user.email === email);

    if (!user) {
      setMessage("User not found");
      return;
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      setMessage("Invalid password");
    } else {
      setMessage("Login successful");
      login(); // Call the login function from the AuthContext
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
              {message && <p className="mt-3 text-center">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
