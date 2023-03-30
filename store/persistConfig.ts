import storage from "redux-persist/lib/storage"; // choose the storage you want to use
import { PersistConfig } from "redux-persist";
import { RootState } from "./slices";

type RootPersistConfig = PersistConfig<RootState>;

const persistConfig: RootPersistConfig = {
  key: "root",
  storage,
  whitelist: [], // add the names of the reducers that you want to persist
  blacklist: [], // add the names of the reducers that you don't want to persist
};

export default persistConfig;
