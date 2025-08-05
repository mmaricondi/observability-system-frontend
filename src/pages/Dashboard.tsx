import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { DashboardContext } from '../contexts/Dashboard/DashboardContext';

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

  return <h1>🏠 Dashboard: {dashboardData}</h1>
}

export default Home