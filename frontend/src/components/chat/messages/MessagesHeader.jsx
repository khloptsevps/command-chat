import React from 'react';
import { useTranslation } from 'react-i18next';

const MessagesHeader = ({ title, count }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b>{`# ${title}`}</b>
      </p>
      <span className="text-muted">
        {t('pages.chat.messages.message', { count })}
      </span>
    </div>
  );
};

export default MessagesHeader;
