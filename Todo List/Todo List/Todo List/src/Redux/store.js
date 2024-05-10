import {applyMiddleware, createStore,compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers/todoReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
    key: 'root', // key for the localStorage object
    storage, // the storage provider
    whitelist: ['reducer'], // reducer keys that you want to persist, in this case, 'todos'
  };
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({reducer});
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  
  const persistor = persistStore(store)
  export { store,persistor};