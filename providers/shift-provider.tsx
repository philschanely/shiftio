import { useState, createContext, useContext, useEffect } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { ShiftService } from '../services';
import { Shift } from '../types';
import { useNurses } from '.';

export type ShiftProviderProps = {
  children: ReactNode;
};

export type ShiftProviderValue = {
  activeShift: Shift | null;
  shiftError: any;
  shifts: Shift[] | null;
  shiftsLoading: boolean;
  setActiveShift: Dispatch<SetStateAction<Shift | null>>;
}

export const defaultValue: ShiftProviderValue = {
  activeShift: null,
  shiftError: null,
  shifts: null,
  shiftsLoading: true,
  setActiveShift: () => null,
};

export const ShiftContext = createContext(defaultValue);

export const useShifts = () => {
  const context = useContext(ShiftContext);

  if (context === defaultValue) {
    throw new Error('useShifts must be used within ShiftProvider');
  }

  return context;
};

export const ShiftProvider = ({ children }: ShiftProviderProps) => {
  const { nurses, nursesLoading, nurseError } = useNurses();
  const [shiftError, setShiftError] = useState<any>(null);
  const [shifts, setShifts] = useState<Shift[] | null>(null);
  const [shiftsLoading, setShiftsLoading] = useState<boolean>(true);
  const [activeShift, setActiveShift] = useState<Shift | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        if (!nurses) {
          throw new Error('No nurses loaded.');
        }

        const loadedShifts = await ShiftService.getAll(nurses);
        setShifts(loadedShifts || []);
        setShiftError(false);
      } catch (error) {
        setShifts([]);
        setShiftError(error);
      } finally {
        setShiftsLoading(false);
      }
    };

    if (!nursesLoading && !nurseError) {
      getData();
    }
  }, [nursesLoading, nurses, nurseError]);

  return (
    <ShiftContext.Provider value={{
      activeShift,
      setActiveShift,
      shiftError,
      shifts,
      shiftsLoading,
    }}>
      {children}
    </ShiftContext.Provider>
  );
};
