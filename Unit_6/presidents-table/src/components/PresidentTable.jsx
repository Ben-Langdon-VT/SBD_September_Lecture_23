import React from 'react';
import PresidentRow from './PresidentRow';
import "../App.css"

function buildRows(presidentsArray) {
  return (
    presidentsArray.map((president, index) => {
      return (
        <PresidentRow
          key={index}
          firstName={president.first}
          lastName={president.last}
          born={president.year}
          passed={president.passed}
        />
      )
    }));
}


/* 
  ! Challenge:
    - Update the props to include the "passed" data from the object.
    - Write a ternary that checks if the president is deceased and respond with either a "Yes" or a "No" as a new <td>
      Note:
        - All data should return back as "Yes" with our current data.
*/

function PresidentTable({ title, presidentsArray }) {
  return (
    <>
      <h3>{title}</h3>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birth Year</th>
              <th>Passed</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {
              buildRows(presidentsArray)
            }
          </tbody>
        </table>
      </div>
    </>

  )
}

export default PresidentTable