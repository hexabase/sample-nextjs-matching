import * as Yup from 'yup';

export const SchemaEmail = Yup.object().shape({
    email: Yup.string()
      .email('無効なメールアドレスがありま')
      .required('メールアドレスを入力してください'),
  });