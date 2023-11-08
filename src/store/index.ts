import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import persistConfig from './persistConfig';
import rootReducer, { RootState } from './slices';

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false
      })
});

const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
