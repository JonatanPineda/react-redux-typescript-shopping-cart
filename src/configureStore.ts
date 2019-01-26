import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actionToPlainObjectConverter  from 'redux-action-class';
import * as fromStore from './store';
import shopService from './services/shop.service'

import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware<
  fromStore.ProductsAction,
  fromStore.ProductsAction,
  fromStore.State
>({
  dependencies: {
    shopService: new shopService()
  }
})

export default function configureStore() {
  const store = createStore(
    fromStore.reducers,
    composeWithDevTools(
      applyMiddleware(
        actionToPlainObjectConverter,
        epicMiddleware
      )
    )
  )

  epicMiddleware.run(fromStore.rootEpic);
  
  return store;
}