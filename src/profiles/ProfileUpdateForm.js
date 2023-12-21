import React, { useContext, useState } from "react";
import userContext from "../auth/userContext";
import Alert from "../common/Alert";
import "./ProfileUpdateForm.css";

/** Form for updating user info.
 *
 * State:
 * - formData: object like { username, firstName, lastName, email }
 * - errors: array like ['error1', 'error2', ... ]
 * - messages: array like ['success message']
 *
 * Prop:
 * - update(): function to call in parent.
 *
 * RouteList -> ProfileUpdateForm
 */

function ProfileUpdateForm({ update }) {
  const { user } = useContext(userContext);
  const [errors, setErrors] = useState([]);
  const [messages, setMessages] = useState([]);
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

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await update(formData);
      setErrors([]);
      setMessages(["Successfully updated profile."]);
    } catch(err) {
      setMessages([]);
      setErrors([...err]);
      return;
    }
  }

  return (
    <div className="ProfileForm col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <h3>Profile</h3>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                disabled
                className="form-control"
                placeholder={formData.username}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {errors.length
              ? <Alert type="danger" messages={errors} />
              : null}

            {messages.length
              ?
              <Alert type="success" messages={messages} />
              : null}

            <div className="d-grid">
              <button className="btn" onClick={handleSubmit}>
                Save Changes
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdateForm;
