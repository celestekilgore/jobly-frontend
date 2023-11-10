import React, { useState } from "react";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom"

/** Form for registering user.
 *
 * State:
 * - formData: object like { username, password, firstName, lastName, email }
 * - errors: array like ['error1', 'error2', ... ]
 *
 * Prop:
 * - signUp(): function to call in parent.
 *
 * RouteList -> SignupForm
 */
function SignupForm({ signUp }) {
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });
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
      await signUp(formData);
      navigate("/");
    } catch(err) {
      setErrors(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="SignupForm form-control">
        <label htmlFor="SignupForm-username">Username</label>
        <input
          required
          id="SignupForm-username"
          name="username"
          className="SignupForm-username form-control"
          value={formData.username}
          onChange={handleChange} />
        <label htmlFor="SignupForm-password">Password</label>
        <input
          required
          id="SignupForm-password"
          minLength="5"
          name="password"
          className="SignupForm-password form-control"
          type="password"
          value={formData.password}
          onChange={handleChange} />
        <label htmlFor="SignupForm-firstName">First Name</label>
        <input
          required
          id="SignupForm-firstName"
          name="firstName"
          className="SignupForm-firstName form-control"
          value={formData.firstName}
          onChange={handleChange} />
        <label htmlFor="SignupForm-lastName">Last Name</label>
        <input
          required
          id="SignupForm-lastName"
          name="lastName"
          className="SignupForm-lastName form-control"
          value={formData.lastName}
          onChange={handleChange} />
        <label htmlFor="SignupForm-email">Email</label>
        <input
          required
          id="SignupForm-email"
          name="email"
          className="SignupForm-email form-control"
          value={formData.email}
          onChange={handleChange} />
        <button className="btn btn-primary">Sign Up</button>
      </form>
      {errors !== null && <Alert messages={errors} color="danger"></Alert>}
    </div>
  );
}

export default SignupForm;
