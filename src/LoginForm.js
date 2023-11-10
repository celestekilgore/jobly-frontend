import React, { useState } from "react";

/** Form for logging user in.
 *
 * State:
 * - formData: object like { username, password }
 *
 * Prop:
 * - login(): function to call in parent.
 *
 * RouteList -> LoginForm
 */
function LoginForm({ login }) {

  const [formData, setFormData] = useState({username:"",password:""});
  // add errors state

  /** Update form inputs. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    // try login, catch
    login(formData);
    setFormData({ username: "", password: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <label htmlFor="LoginForm-username">Username</label>
      <input
        required
        name="username"
        className="LoginForm-username form-control"
        value={formData.username}
        onChange={handleChange} />
      <label htmlFor="LoginForm-password">Password</label>
      <input
        required
        type="password"
        minLength="5"
        name="password"
        className="LoginForm-password form-control"
        value={formData.password}
        onChange={handleChange} />
      <button className="btn btn-primary">Login</button>
    </form>
  );
}

export default LoginForm;
