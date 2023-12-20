import React, { useState } from "react";
import Alert from "../common/Alert";
import { useNavigate } from "react-router-dom"
import "./LoginForm.css";

/** Form for logging user in.
 *
 * State:
 * - formData: object like { username, password }
 * - errors: array like ['error1', 'error2', ... ]
 *
 * Prop:
 * - login(): function to call in parent.
 *
 * RouteList -> LoginForm
 */
function LoginForm({ login }) {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  /** Update form inputs. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      navigate("/");
    } catch(err) {
      setErrors(err);
    }
  }

  return (
    <div className="LoginForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h3 className="title mb-3">Log In</h3>

        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="username"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />
              </div>

              {errors.length
                ? <Alert type="danger" messages={errors} />
                : null}

              <div className="d-grid">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
