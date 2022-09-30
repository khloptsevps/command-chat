import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const initSchema = () => {
  const { t } = useTranslation();
  return Yup.object({
    username: Yup.string().required(t('pages.signUp.form.errors.requared')),
    password: Yup.string()
      .required(t('pages.signUp.form.errors.requared'))
      .min(6, t('pages.signUp.form.errors.min')),
    confirmPassword: Yup.string()
      .required(t('pages.signUp.form.errors.requared'))
      .oneOf(
        [Yup.ref('password'), null],
        t('pages.signUp.form.errors.passwordsDoesMutch')
      ),
  });
};

export default initSchema;
// TODO add validation schema
