import React from "react";

/** Render alert component.
 *
 * Props:
 * - messages: array like ['error1', 'error2', ... ]
 * -isError: boolean
 *
 * { SignupForm, LoginForm, ProfileUpdateForm } -> Alert
 */
function Alert({ messages, isError }) {
  let color;
  isError ? color = 'danger' : color = 'success';
  return (
    <div className={`Alert alert alert-${color}`}>
      {messages.map((message, idx) => <div key={idx}><i>{message}</i><br /></div>)}
    </div>
  );
}

export default Alert;