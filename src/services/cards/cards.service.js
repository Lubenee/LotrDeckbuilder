import request from '../../commons/request';

const getAll = () => {
  return request({
    url: 'cards',
    method: 'GET',
  });
};

const CardsService = {getAll};

export default CardsService;
