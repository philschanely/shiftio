import axios from 'axios';
import { Shift, APIShift, Nurse } from '../types';

export const get = async (_id: Number): Promise<Shift | void> => {
  try {
    const shifts = await getAll();
    return shifts?.filter(({ id }) => id === _id)[0];
  } catch (error) {
    console.error(error);
  }
};
  
export const getAll = async (nurses: Nurse[] = []): Promise<Shift[] | void> => {
  try {
    const response = await axios.get('http://localhost:9001/shifts');
    return response.data.map(({
      end,
      id,
      name,
      nurse_id,
      qual_required,
      start,
    }: APIShift) => {
      const nurse = nurse_id && nurses.filter(({ id }) => id === nurse_id);
      return {
        qualification: qual_required,
        name,
        end,
        id,
        nurse: nurse ? nurse[0] : null,
        shift: name,
        start,
      };
    });
  } catch (error) {
    console.error(error);
  }
};