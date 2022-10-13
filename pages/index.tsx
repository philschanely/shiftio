import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { NurseService, ShiftService } from '../services';
import { Nurse, Shift } from '../types';
import { Alert, Button } from '../components';
import { ShiftTable, ShiftAssignmentModal } from './components';

const HomePage: NextPage = () => {
  const [showAssignmentsModal, setShowAssignmentsModal] = useState(true);
  const [nurses, setNurses] = useState<Nurse[]>([]);
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  const handleAssignNurse = (id?: Shift['id']) => {
    setShowAssignmentsModal(true);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const loadedNurses = await NurseService.getAll();
        setNurses(loadedNurses || []);

        if (loadedNurses) {
          const loadedShifts = await ShiftService.getAll(loadedNurses);
          setShifts(loadedShifts || []);
        }

        setShowError(false);
      } catch (error) {
        setNurses([]);
        setShifts([]);
        setShowError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Head>
        <title>All open shifts | Shiftio</title>
        <meta name="description" content="All open shifts on Shiftio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ShiftAssignmentModal
        active={showAssignmentsModal}
        nurses={nurses}
        shifts={shifts}
        onClose={() => setShowAssignmentsModal(false)}
        onDismiss={() => setShowAssignmentsModal(false)}
      />

      {loading && (
        <p>Loading...</p>
      )}

      {showError && (
        <Alert severity="error">
          Something unexpected happened... please refresh the page or contact support!
        </Alert>
      )}

      {(!loading && !showError) && (
        <>
          <Button color="primary" onClick={() => handleAssignNurse()}>
            Set shift assignment
          </Button>
          <ShiftTable handleAssignNurse={handleAssignNurse} shifts={shifts} />
        </>
      )}
    </>
  );
};

export default HomePage;
