import React, { useState } from 'react'
import PracticeForm from '../../../formik/formsAndFields/PracticeForm'
import HtmlToRtf from '../../../HtmlToBrowser'

export default function HomeSectionIndex(props: any) {
  console.log(props, "6pr...")
  const [count, setCount] = useState(0)
  const countReset = () => {
    setCount(count + 1)
    setCount((prevCount) => prevCount + 5)
  }
  return (
    <div><PracticeForm />
      <HtmlToRtf />
      <p>Counter -{count}</p>
      <button onClick={() => { countReset() }}>Click Here</button>
    </div>
  )
}
