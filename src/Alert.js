import React from "react";

/** Render alert component.
 *
 * Props:
 * - messages: array like ['error1', 'error2', ... ]
 * -color: color for bootstrap error message like "alert"
 *
 * { SignupForm, LoginForm, ProfileUpdateForm } -> Alert
 */

function Alert({ messages, color }) {

  return (
    <div className={`Alert alert alert-${color}`}>
      {messages.map((message, idx) => <div key={idx}><i>{message}</i><br /></div>)}
    </div>
  );
}

export default Alert;