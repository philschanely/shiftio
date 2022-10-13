import axios from 'axios';
import { Nurse, APINurse } from '../types';

export const get = async (_id: Number): Promise<Nurse | void> => {
  try {
    const nurses = await getAll();
    return nurses?.filter(({ id }) => id === _id)[0];
  } catch (error) {
    console.error(error);
  }
};
  
export const getAll = async (): Promise<Nurse[] | void> => {
  try {
    const response = await axios.get('http://localhost:9001/nurses');
    return response.data.map(({
      email,
      first_name,
      id,
      last_name,
      qualification,
      username,
    }: APINurse) => ({
      email,
      firstName: first_name,
      id,
      lastName: last_name,
      qualification,
      username,
      displayName: `${last_name} ${first_name}, ${qualification}`,
    }));
  } catch (error) {
    console.error(error);
  }
};