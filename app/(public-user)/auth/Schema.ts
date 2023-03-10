import * as Yup from 'yup';

export const SchemaEmail = Yup.object().shape({
  email: Yup.string()
    .email('無効なメールアドレスがあります')
    .required('メールアドレスを入力してください'),
});

export const SchemaRegisterCompany = Yup.object().shape({
  company_name: Yup.string().required('会社名を入力してください'),
  company_address: Yup.string().required(
    '例：東京都中央区秋葉原 1-1-1 HEXAビル 2階'
  ),
  password: Yup.string()
    .min(8, 'パスワードが短すぎます')
    .required('パスワードを入力してください'),
  business: Yup.string().required('事業内容を入力してください。'),
  url: Yup.string(),
});

export const SchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email('無効なメールアドレスがあります')
    .required('メールアドレスを入力してください'),
  password: Yup.string()
    .min(8, 'パスワードが短すぎます')
    .required('パスワードを入力してください'),
});
