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
          buttons: {
            remove: 'Удалить',
            rename: 'Переименовать',
          },
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
        modals: {
          addChannel: {
            title: 'Добавить канал',
            label: 'Имя канала',
            errors: {
              required: 'Обязательное поле',
              min: 'От 3 до 20 символов',
              max: 'От 3 до 20 символов',
              notOneOf: 'Должно быть уникальным',
            },
          },
          renameChannel: {
            title: 'Переименовать канал',
            label: 'Введите новое имя канала',
          },
          removeChannel: {
            title: 'Удалить канал',
            message: 'Уверены?',
          },
          buttons: {
            send: 'Отправить',
            chancel: 'Отменить',
            remove: 'Удалить',
          },
        },
      },
    },
  },
};
