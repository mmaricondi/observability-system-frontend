import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { DashboardContext } from '../contexts/Dashboard/DashboardContext';
import { Footer } from '../components/page/footer';
import { TopBar } from '../components/page/topBar';
import StatusServices from '../components/dashboard/status';
import AllServices from '../components/dashboard/services';
import type { ILastAppEvent } from '../interfaces/dashboard/last-app-event.interface';

function Home() {
  const authCtx = useContext(AuthContext);
  const dashboardCtxt = useContext(DashboardContext);

  const [appLastEventData, setAppLastEventData] = useState<ILastAppEvent>();
  const [appAvgEventData, setAppAvgEventData] = useState<any>(null);

  useEffect(() => {
    // const token = authCtx.getToken();
    // if (token) {
      getDashboardData();
    // }
  }, []);

  const getDashboardData = async () => {
    await dashboardCtxt.fetchLastAppEventData();
    // const avgAppEvent = await dashboardCtxt.getAvgAppEventsData();
    // setAppLastEventData(lastAppEvent);
    // setAppAvgEventData(avgAppEvent);
  }

  return (
    <>
    <div className="w-screen h-screen flex justify-bottom pt-20 flex-col bg-gray-100">
        <TopBar />
        <div className="bg-white shadow-md rounded-md mx-5 flex flex-col">
            <StatusServices />
            <AllServices data={appAvgEventData} />
        </div>
        <Footer />
    </div>
    </>
  );
}

export default Home