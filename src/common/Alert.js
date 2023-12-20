import React from "react";

/** Render alert component.
 *
 * Props:
 * - messages: array like ['error1', 'error2', ... ]
 * -color: color for bootstrap error message like "alert"
 *
 * { SignupForm, LoginForm, ProfileUpdateForm } -> Alert
 */

function Alert({ type = "danger", messages = [] }) {
  console.debug("Alert", "type=", type, "messages=", messages);

  return (
    <div className={`alert alert-${type}`} role="alert">
      {messages.map(error => (
        <p className="mb-0 small" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
}

export default Alert;
