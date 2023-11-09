import React, { useState } from "react";

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

  const [formData, setFormData] = useState({
    username: null,
    firstName: null,
    lastName: null,
    email: null
  });

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    update(formData);
    setFormData({
      username: null,
      firstName: null,
      lastName: null,
      email: null
    });
  }

  return (
    <form onSubmit={handleSubmit} className="ProfileUpdateForm">
      <label htmlFor="ProfileUpdateForm-username">Username</label>
      <input
        name="username"
        className="ProfileUpdateForm-username"
        disabled
        value={formData.username}
        onChange={handleChange} />
      <label htmlFor="ProfileUpdateForm-firstName">First Name</label>
      <input
        name="firstName"
        className="ProfileUpdateForm-firstName"
        value={formData.firstName}
        onChange={handleChange} />
      <label htmlFor="ProfileUpdateForm-lastName">Last Name</label>
      <input
        name="lastName"
        className="ProfileUpdateForm-lastName"
        value={formData.lastName}
        onChange={handleChange} />
      <label htmlFor="ProfileUpdateForm-email">Email</label>
        <input
          name="email"
          className="ProfileUpdateForm-email"
          value={formData.email}
          onChange={handleChange} />
      <button>Sign Up</button>
    </form>
  );
}

export default ProfileUpdateForm;
