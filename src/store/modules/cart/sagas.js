import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCardSuccess } from './actions';

// O 'asterisco' indica que a função é 'async await', essa notação chama-se
// 'generator' e ele é mais poderoso que o 'async await'
function* addToCart({ id }) {
  // yield = ield
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCardSuccess(response.data));
}
// takeLatest garante que somente a última chamada será aproveitada
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
