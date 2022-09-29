import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import useModal from '../../../utils/hooks/useModal.jsx';

const initSchema = () => {
  const { channelsNames } = useModal();
  const { t } = useTranslation();
  return Yup.object({
    name: Yup.string()
      .required(t('pages.chat.modals.addChannel.errors.required'))
      .min(3, t('pages.chat.modals.addChannel.errors.min'))
      .max(20, t('pages.chat.modals.addChannel.errors.max'))
      .notOneOf(
        channelsNames,
        t('pages.chat.modals.addChannel.errors.notOneOf')
      ),
  });
};

export default initSchema;
