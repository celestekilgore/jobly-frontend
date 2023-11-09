import React from "react";

function Alert({messages, isError}) {
  let color;
  isError ? color = 'danger' : color = 'success'
  return (
    <div className={`Alert alert alert-${color}`}>
      {messages.map((message, idx) => <i key={idx}>{message}</i>)}
    </div>
  )
}

export default Alert;