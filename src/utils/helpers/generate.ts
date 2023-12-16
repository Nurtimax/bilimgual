import { V4Options, v4 as uuidv4 } from 'uuid';

const generateId = (options?: V4Options) => {
   return uuidv4(options);
};

export default generateId;
