import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import persistConfig from './persistConfig';
import rootReducer, { RootState } from './slices';

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
         }
      })
});

const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
