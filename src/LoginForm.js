import React, { useState } from "react";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom"

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
  const [errors, setErrors] = useState(null);
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
    <div>
      <form onSubmit={handleSubmit} className="LoginForm">
        <label htmlFor="LoginForm-username">Username</label>
        <input
          required
          name="username"
          id="LoginForm-username"
          className="LoginForm-username form-control"
          value={formData.username}
          onChange={handleChange} />
        <label htmlFor="LoginForm-password">Password</label>
        <input
          required
          type="password"
          minLength="5"
          name="password"
          id="LoginForm-password"
          className="LoginForm-password form-control"
          value={formData.password}
          onChange={handleChange} />
        <button className="btn btn-primary">Login</button>
      </form>
      {errors !== null && <Alert messages={errors} color="danger"></Alert>}
    </div>
  );
}

export default LoginForm;
