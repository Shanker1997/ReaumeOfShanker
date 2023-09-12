import { useFormik } from 'formik'
import React from 'react'

export default function PracticeForm() {
  const HandleSubmit = (values: any) => {
    console.log(values)

  }
  const formik = useFormik({
    initialValues: { name: "", email: "" },
    onSubmit: (values: any) => HandleSubmit(values)
  })
  console.log(formik.values)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor={'name'}> Name</label>
        <input type='text' name='name' id='name' onChange={formik.handleChange} value={formik.values.name} />
        <label htmlFor={'email'}> E-mail</label>
        <input type='mail' name='email' id='email' onChange={formik.handleChange} value={formik.values.email} />
        <button type='submit'> Submit </button>
      </form>
    </div>
  )
}
