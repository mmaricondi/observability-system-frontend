import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { DashboardContext } from '../contexts/Dashboard/DashboardContext';
import { Footer } from '../components/page/footer';
import { TopBar } from '../components/page/topBar';
import StatusServices from '../components/dashboard/status';
import AllServices from '../components/dashboard/services';
import IncidentHistory from '../components/dashboard/incidentHistory';

function Home() {
  const authCtxt = useContext(AuthContext);
  const dashboardCtxt = useContext(DashboardContext);

  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [dashboardData, setDashboardData] = useState<any>(null);

  useEffect(() => {
    setAccessToken(authCtxt.getToken());
    if (accessToken) {
      getDashboardData();
    }
  }, []);

  const getDashboardData = async () => {
    await dashboardCtxt.getDashboardData()
      .then(data => {
        setDashboardData(data);
      })
      .catch(error => {
        console.error("Error fetching dashboard data:", error);
      });
  }

  return (
    <>
    <div className="w-screen h-screen flex justify-bottom pt-20 flex-col bg-gray-100">
        <TopBar />
        <div className="bg-white shadow-md rounded-md mx-5 flex flex-col">
            <StatusServices />
            <AllServices />
            <Footer />
        </div>
    </div>
    </>
  );
}

export default Home