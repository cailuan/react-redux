import { call, put, takeEvery, takeLatest ,take ,fork} from 'redux-saga/effects'


// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用
function* fetchUser(action) {
   try {
     console.log('fetchUser',action)
    //   const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED",count :action.count + 1});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
function* mySaga() {
  console.log('mySaga')
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  yield takeEvery('TAKE_FEATCH_ADMIN',takeFeatch);
}


function* takeFeatch(action){
  console.log(action,'takeFeatch',1)
  const takeData = yield take('TAKE_FEATCH_ADMIN')
  console.log(action,'takeFeatch',2)
  yield put({type:'TAKE_FEATCH',count:action.count - 1})
  console.log(action,'takeFeatch',3)
  yield put({type:'TAKE_FEATCH',count:takeData.count - 2})
  console.log(action,'takeFeatch',4,takeData)
}
/*
  也可以使用 takeLatest

  不允许并发，dispatch 一个 `USER_FETCH_REQUESTED` action 时，
  如果在这之前已经有一个 `USER_FETCH_REQUESTED` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default mySaga;