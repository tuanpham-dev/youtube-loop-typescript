import { Store, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer, RootState } from './reducers'

export const configureStore = (initialState?: RootState): Store<RootState> => {
  const middleware = composeWithDevTools()
  const store = createStore(rootReducer, initialState, middleware) as Store<RootState>

  return store
}

export default configureStore