import React, { useContext, useState } from "react";
import userContext from "./userContext";

/** Form for updating user info.
 *
 * State:
 * - formData: object like { username, firstName, lastName, email }
 *
 * Prop:
 * - update(): function to call in parent.
 *
 * RouteList -> ProfileUpdateForm
 */
function ProfileUpdateForm({ update }) {
  const { user } = useContext(userContext);

  const [formData, setFormData] = useState({
    username: user.username || '',
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || ''
  });

  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    update(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="ProfileUpdateForm form-control">
      <label htmlFor="ProfileUpdateForm-username">Username</label>
      <input
        disabled
        required
        name="username"
        className="ProfileUpdateForm-username form-control"
        value={formData.username}
        onChange={handleChange} />
      <label htmlFor="ProfileUpdateForm-firstName">First Name</label>
      <input
        required
        name="firstName"
        className="ProfileUpdateForm-firstName form-control"
        value={formData.firstName}
        onChange={handleChange} />
      <label htmlFor="ProfileUpdateForm-lastName">Last Name</label>
      <input
        required
        name="lastName"
        className="ProfileUpdateForm-lastName form-control"
        value={formData.lastName}
        onChange={handleChange} />
      <label htmlFor="ProfileUpdateForm-email">Email</label>
      <input
        required
        name="email"
        className="ProfileUpdateForm-email form-control"
        value={formData.email}
        onChange={handleChange} />
      <button className="btn btn-primary">Save Changes</button>
    </form>
  );
}

export default ProfileUpdateForm;
