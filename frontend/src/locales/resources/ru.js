export default {
  translation: {
    navbar: {
      title: 'Hexlet Chat',
      button: 'Выйти',
    },
    toasts: {
      channelAdded: 'Канал создан',
      channelRenamed: 'Канал переименован',
      channelRemoved: 'Канал удален',
    },
    pages: {
      signUp: {
        imageAlt: 'Регистрация',
        form: {
          title: 'Регистрация',
          button: 'Зарегистрироваться',
          labels: {
            username: 'Имя пользователя',
            password: 'Пароль',
            confirmPassword: 'Подтвердите пароль',
          },
          errors: {
            requared: 'Обязательное поле',
            min: 'Не менее 6 символов',
            passwordsDoesMutch: 'Пароли должны совпадать',
            userExist: 'Такой пользователь уже существует',
          },
        },
      },
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
          networkError: 'Ошибка соединения',
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
