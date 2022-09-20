export default {
  translation: {
    navbar: {
      title: 'Hexlet Chat',
      button: 'Выйти',
    },
    pages: {
      login: {
        imageAlt: 'Войти',
        footer: {
          question: 'Нет аккаунта? ',
          link: 'Регистрация',
        },
        form: {
          title: 'Войти',
          inputLabel: 'Ваш ник',
          passwordLabel: 'Пароль',
          button: 'Войти',
          error: 'Неверные имя пользователя или пароль',
        },
      },
      notFound: {
        title: 'Страница не найдена',
        text: 'Но вы можете перейти ',
        link: 'на главную страницу',
      },
      chat: {
        channels: {
          title: 'Каналы',
        },
        messages: {
          form: {
            input: {
              ariaLabel: 'Новое сообщение',
              placeholder: 'Ведите сообщение...',
            },
            button: 'Отправить',
            errors: {
              network: 'Ошибка подключения, выполняется переподключение...',
              reconnect: 'Подключение установлено!',
            },
          },
          message_one: '{{count}} сообщение',
          message_few: '{{count}} сообщения',
          message_many: '{{count}} сообщений',
        },
      },
    },
  },
};
