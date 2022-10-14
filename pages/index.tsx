import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Shift } from '../types';
import { ShiftTable, ShiftAssignmentModal } from './components';
import { useNurses, useShifts } from '../providers';

const HomePage: NextPage = () => {
  const {
    shifts,
    activeShift,
    saveAssignment,
    setActiveShift,
    validateAssignment,
  } = useShifts();
  const { nurses, activeNurse } = useNurses();
  const [showAssignmentsModal, setShowAssignmentsModal] = useState(false);

  const handleAssignNurse = (_id?: Shift['id']) => {
    const activeShifts = shifts?.filter(({ id }) => id === _id);
    if (activeShifts?.length === 1) {
      setActiveShift(activeShifts[0]);
    } else {
      setActiveShift(null);
    }

    setShowAssignmentsModal(true);
  };

  const closeAssignmentsModal = () => {
    setShowAssignmentsModal(false);
    setActiveShift(null);
  };

  return (
    <>
      <Head>
        <title>All open shifts | Shiftio</title>
        <meta name="description" content="All open shifts on Shiftio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShiftAssignmentModal
        active={showAssignmentsModal}
        activeNurse={activeNurse}
        activeShift={activeShift}
        onClose={closeAssignmentsModal}
        onDismiss={closeAssignmentsModal}
        nurses={nurses}
        saveAssignment={saveAssignment}
        shifts={shifts}
        validateAssignment={validateAssignment}
      />
      <ShiftTable handleAssignNurse={handleAssignNurse} />
    </>
  );
};

export default HomePage;
