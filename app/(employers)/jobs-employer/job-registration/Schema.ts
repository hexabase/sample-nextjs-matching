import * as Yup from 'yup';

export const SchemaJobRegistration = Yup.object().shape({
  job_title: Yup.string().required(),
  sub_title: Yup.string().required(),
  start_word_date: Yup.string().required(),
  end_word_date: Yup.string().required(),
  postal_code: Yup.string().required(),
  prefecture: Yup.string().required(),
  city: Yup.string().required(),
  address: Yup.string().required(),
  work_content: Yup.string().required(),
  work_details: Yup.string().required(),
  hourly_wage: Yup.number().required(),
});
