import React from 'react'
import PracticeForm from '../../../formik/formsAndFields/PracticeForm'

export default function HomeSectionIndex() {
  return (
    <div><PracticeForm />
    <table className='table-bordered table'>
      <thead>

      <tr>
        <th rowSpan={2}> Header1</th>
        <th colSpan={3}>Header2</th>
        <th rowSpan={2}>Header3</th>
      </tr>
      <tr>
        <th colSpan={1}> subheade1</th>
        <th colSpan={1}> subheade2</th>
        <th colSpan={1}> subhead3</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={1}>data1</td>
          <td colSpan={1}>data2</td>
          <td colSpan={1}>data3</td>
          <td colSpan={1}>data4</td>
          <td colSpan={1}>data5</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}
