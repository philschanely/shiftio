import { useState, createContext, useContext, useEffect} from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { NurseService } from '../services';
import { Nurse } from '../types';

export type NurseProviderProps = {
  children: ReactNode;
};

export type NurseProviderValue = {
  activeNurse: Nurse | null;
  nurseError: any;
  nurses: Nurse[] | null;
  nursesLoading: boolean;
  setActiveNurse: Dispatch<SetStateAction<Nurse | null>>;
}

export const defaultValue: NurseProviderValue = {
  activeNurse: null,
  nurseError: false,
  nurses: null,
  nursesLoading: true,
  setActiveNurse: () => null,
};

export const NurseContext = createContext(defaultValue);

export const useNurses = () => {
  const context = useContext(NurseContext);

  if (context === defaultValue) {
    throw new Error('useNurses must be used within NurseProvider');
  }

  return context;
};

export const NurseProvider = ({ children }: NurseProviderProps) => {
  const [nurseError, setNurseError] = useState<any>(null);
  const [nurses, setNurses] = useState<Nurse[] | null>(null);
  const [nursesLoading, setNursesLoading] = useState<boolean>(true);
  const [activeNurse, setActiveNurse] = useState<Nurse | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const loadedNurses = await NurseService.getAll();
        setNurses(loadedNurses || []);
        setNurseError(null);
      } catch (error) {
        setNurses([]);
        setNurseError(error);
      } finally {
        setNursesLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <NurseContext.Provider value={{
      activeNurse,
      nurseError,
      nurses,
      nursesLoading,
      setActiveNurse,
    }}>
      {children}
    </NurseContext.Provider>
  );
};
