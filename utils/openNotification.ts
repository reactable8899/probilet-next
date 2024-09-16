import { notification } from 'antd';

const openNotification = (type: string, obj: any) => {
  if (type === 'success') {
    notification.success({
      message: 'Успешно',
      description: obj?.description || 'Выполненно успешно!',
      placement: 'bottomRight',
    });
  } else {
    notification.error({
      message: `${obj?.code}: ${obj?.message}` || 'Ошибка сервера',
      description: obj?.detail || 'Сервер не отвечает попробуйте позже',
      placement: 'bottomRight',
    });
  }
};

export default openNotification;
