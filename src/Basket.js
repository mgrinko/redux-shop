import { useSelector, useDispatch } from 'react-redux';
import { selectors } from './redux/store';

export const Basket = () => {
  // const items = useSelector(state => state.basket.items);
  const items = useSelector(selectors.getBasketItems);

  return (
    <div className="Basket">
      <h2>Basket</h2>

      <ul>
        {items.map(item => (
          <li key={item.good.id}>
            {item.good.name} ({item.quantity})
          </li>
        ))}
      </ul>
    </div>
  )
};
