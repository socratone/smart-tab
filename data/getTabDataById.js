import tabDatas from './tabDatas';

const getTabDataById = id => {
  id = Number(id);
  const [data] = tabDatas.filter(data => data.id === id);
  return data;
};

export default getTabDataById;