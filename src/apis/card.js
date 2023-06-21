import api from './api';

const getCards = async () => {
  try {
    const response = await api({
      method: 'GET',
      url: '/cards',
    });
    return response;
  } catch (error) {
    return null;
  }
};

export { getCards };
