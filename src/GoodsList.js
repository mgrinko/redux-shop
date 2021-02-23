import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getGoods } from './api';
import { actions } from './redux/basket';

export const GoodsList = () => {
  const [goods, setGoods] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getGoods().then(setGoods);
  }, []);

  return (
    <div>
      <h2>Goods</h2>
      <ul>
        {goods.map(good => (
          <li key={good.id}>
            {good.name}
            <button onClick={() => {
              dispatch(actions.addGood(good));
            }}>
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
