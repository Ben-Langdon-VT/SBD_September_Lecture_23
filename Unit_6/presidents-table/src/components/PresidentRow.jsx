import React from 'react'

function PresidentRow({firstName, lastName, born, passed}) {

  

  const date = new Date().getFullYear();
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{born}</td>
      <td>{passed === undefined ? "Yes" : "No"}</td>
      <td>{passed === undefined ? date - born : passed - born}</td>
    </tr>
  )
}

export default PresidentRow