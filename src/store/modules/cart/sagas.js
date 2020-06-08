import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { addToCardSuccess, updateAmount } from './actions';

// O 'asterisco' indica que a função é 'async await', essa notação chama-se
// 'generator' e ele é mais poderoso que o 'async await'
function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque!');
    return;
  }

  if (productExists) {
    // Dispara a action
    yield put(updateAmount(id, amount));
  } else {
    // yield = ield
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCardSuccess(data));
  }
}
// takeLatest garante que somente a última chamada será aproveitada
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
