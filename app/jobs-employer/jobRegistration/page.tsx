'use-client'

import { useFormik } from "formik";
import * as Yup from 'yup';

function JobRegistration() {
  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     name: '',
  //     ownPR: '',
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string()
  //       .required('Required')
  //       .min(4, 'Must be 4 characters or more'),
  //     email: Yup.string()
  //       .required('Required')
  //       .matches(
  //         /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  //         'Please enter a valid email address'
  //       ),
  //     ownPR: Yup.string().required('Required'),
  //   }),
  //   onSubmit: (values: unknown) => {
  //     window.alert('Form submited');
  //     console.log('============= value', values);
  //   },
  // });

  return (
    <>
      <div>
        <p>
          Hello
        </p>
      </div>
    </>
  );
}

export default JobRegistration