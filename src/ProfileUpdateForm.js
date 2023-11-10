import React, { useContext, useState } from "react";
import userContext from "./userContext";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom"

/** Form for updating user info.
 *
 * State:
 * - formData: object like { username, firstName, lastName, email }
 * - errors: array like ['error1', 'error2', ... ]
 *
 * Prop:
 * - update(): function to call in parent.
 *
 * RouteList -> ProfileUpdateForm
 */
function ProfileUpdateForm({ update }) {
  const { user } = useContext(userContext);
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    username: user.username || '',
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || ''
  });
  const navigate = useNavigate();

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
      await update(formData);
      navigate("/");
    } catch(err) {
      setErrors(err);
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className="ProfileUpdateForm form-control">
        <label htmlFor="ProfileUpdateForm-username">Username</label>
        <input
          disabled
          id="ProfileUpdateForm-username"
          required
          name="username"
          className="ProfileUpdateForm-username form-control"
          value={formData.username}
          onChange={handleChange} />
        <label htmlFor="ProfileUpdateForm-firstName">First Name</label>
        <input
          required
          id="ProfileUpdateForm-firstName"
          name="firstName"
          className="ProfileUpdateForm-firstName form-control"
          value={formData.firstName}
          onChange={handleChange} />
        <label htmlFor="ProfileUpdateForm-lastName">Last Name</label>
        <input
          required
          id="ProfileUpdateForm-lastName"
          name="lastName"
          className="ProfileUpdateForm-lastName form-control"
          value={formData.lastName}
          onChange={handleChange} />
        <label htmlFor="ProfileUpdateForm-email">Email</label>
        <input
          required
          id="ProfileUpdateForm-email"
          name="email"
          className="ProfileUpdateForm-email form-control"
          value={formData.email}
          onChange={handleChange} />
        <button className="btn btn-primary">Save Changes</button>
      </form>
      {errors !== null && <Alert messages={errors} color="danger"></Alert>}
    </div>
  );
}

export default ProfileUpdateForm;
