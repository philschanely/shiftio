import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Shift } from '../types';
import { ShiftTable, ShiftAssignmentModal } from './components';
import { useNurses, useShifts } from '../providers';

const HomePage: NextPage = () => {
  const { shifts, activeShift, setActiveShift } = useShifts();
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

  return (
    <>
      <Head>
        <title>All open shifts | Shiftio</title>
        <meta name="description" content="All open shifts on Shiftio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShiftAssignmentModal
        active={showAssignmentsModal}
        onClose={() => setShowAssignmentsModal(false)}
        onDismiss={() => setShowAssignmentsModal(false)}
        activeNurse={activeNurse}
        activeShift={activeShift}
        nurses={nurses}
        shifts={shifts}
      />
      <ShiftTable handleAssignNurse={handleAssignNurse} />
    </>
  );
};

export default HomePage;
