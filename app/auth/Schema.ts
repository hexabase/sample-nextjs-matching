import * as Yup from 'yup';

export const SchemaEmail = Yup.object().shape({
  email: Yup.string()
    .email('無効なメールアドレスがありま')
    .required('メールアドレスを入力してください'),
});

export const SchemaRegisterCompany = Yup.object().shape({
  companyName: Yup.string().required('会社名を入力してください'),
  email: Yup.string()
    .email('無効なメールアドレスがありま')
    .required('メールアドレスを入力してください'),
  password: Yup.string()
    .min(8, 'パスワードが短すぎます')
    .required('パスワードを入力してください'),
  businessDetail: Yup.string().required('事業内容を入力してください。'),
  companyUrl: Yup.string()
});
export const SchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email('無効なメールアドレスがありま')
    .required('メールアドレスを入力してください'),
  password: Yup.string()
    .min(8, 'パスワードが短すぎます')
    .required('パスワードを入力してください'),
});

