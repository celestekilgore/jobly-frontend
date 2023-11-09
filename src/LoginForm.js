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

  const [formData, setFormData] = useState({ username: null, password: null });

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
    setFormData({ username: null, password: null });
  }

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <label htmlFor="LoginForm-username">Username</label>
      <input
        name="username"
        className="LoginForm-username"
        value={formData.username}
        onChange={handleChange} />
      <label htmlFor="LoginForm-password">Password</label>
      <input
        name="password"
        className="LoginForm-password"
        value={formData.password}
        onChange={handleChange} />
      <button>Login</button>
    </form>
  );
}

export default LoginForm;
