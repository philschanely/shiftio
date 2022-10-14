import { useState, createContext, useContext, useEffect } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { ShiftService } from '../services';
import { Qualifications, Shift } from '../types';
import { useNurses } from '.';

export type ShiftProviderProps = {
  children: ReactNode;
};

export type ShiftProviderValue = {
  activeShift: Shift | null;
  saveAssignment: ({ nurseId, shiftId }: { nurseId: number, shiftId: number }) => Promise<boolean>;
  shiftError: any;
  shifts: Shift[] | null;
  shiftsLoading: boolean;
  setActiveShift: Dispatch<SetStateAction<Shift | null>>;
  validateAssignment: ({ nurseId, shiftId }: { nurseId: number, shiftId: number }) => boolean | string;
}

export const defaultValue: ShiftProviderValue = {
  saveAssignment: () => new Promise<boolean>((resolve) => resolve(false)),
  activeShift: null,
  shiftError: null,
  shifts: null,
  shiftsLoading: true,
  setActiveShift: () => null,
  validateAssignment: () => false,
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

  const getNurse = (nurseId: number) => nurses?.filter(({ id }) => id === nurseId)[0];
  const getShift = (shiftId: number) => shifts?.filter(({ id }) => id === shiftId)[0];

  const getQualificationLevel = (qualification: Qualifications) => {
    switch (qualification) {
      case 'CNA':
        return 1;
      case 'LPN':
        return 2;
      case 'RN':
        return 3;
      default:
        return 0;
    }
  };

  const validateAssignment = ({ nurseId, shiftId }: { nurseId: number, shiftId: number }) => {
    const errors: { nurse?: string; shift?: string } = {};
    const shift = getShift(shiftId);
    const nurse = getNurse(nurseId);
    if (!nurse || !shift) {
      return false;
    }

    const nurseLevel = getQualificationLevel(nurse.qualification);
    const shiftLevel = getQualificationLevel(shift.qualification);

    // TODO: Validate nurse's qualification against shift qualification
    if (shiftLevel > nurseLevel) {
      errors.nurse = 'This nurse is not qualified to work this shift';
    }

    // TODO: Validate nurse's availability
    return errors;
  };

  const saveAssignment = async ({ nurseId, shiftId }: { nurseId: number, shiftId: number }) => {
    const selectedNurse = getNurse(nurseId);
    const newShifts = shifts?.map(shift => {
      if (shift.id === shiftId) {
        shift.nurse = selectedNurse || null;
      }
      return shift;
    }) || [];
    setShifts(newShifts);

    await ShiftService.save({ nurseId, shiftId });
    return true;
  };

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
      saveAssignment,
      setActiveShift,
      shiftError,
      shifts,
      shiftsLoading,
      validateAssignment,
    }}>
      {children}
    </ShiftContext.Provider>
  );
};
