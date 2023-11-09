import React, { useState } from "react";

/** Form for registering user.
 *
 * State:
 * - formData: object like { username, password, firstName, lastName, email }
 *
 * Prop:
 * - signUp(): function to call in parent.
 *
 * RouteList -> SignupForm
 */
function SignupForm({ signUp }) {

  const [formData, setFormData] = useState({
    username: null,
    password: null,
    firstName: null,
    lastName: null,
    email: null
  });

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    signUp(formData);
    setFormData({
      username: null,
      password: null,
      firstName: null,
      lastName: null,
      email: null
    });
  }

  return (
    <form onSubmit={handleSubmit} className="SignupForm">
      <label htmlFor="SignupForm-username">Username</label>
      <input
        name="username"
        className="SignupForm-username"
        value={formData.username}
        onChange={handleChange} />
      <label htmlFor="SignupForm-password">Password</label>
      <input
        name="password"
        className="SignupForm-password"
        value={formData.password}
        onChange={handleChange} />
      <label htmlFor="SignupForm-firstName">First Name</label>
      <input
        name="firstName"
        className="SignupForm-firstName"
        value={formData.firstName}
        onChange={handleChange} />
      <label htmlFor="SignupForm-lastName">Last Name</label>
      <input
        name="lastName"
        className="SignupForm-lastName"
        value={formData.lastName}
        onChange={handleChange} />
      <label htmlFor="SignupForm-email">Email</label>
        <input
          name="email"
          className="SignupForm-email"
          value={formData.email}
          onChange={handleChange} />
      <button>Sign Up</button>
    </form>
  );
}

export default SignupForm;
