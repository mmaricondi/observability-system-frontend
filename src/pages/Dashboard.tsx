import { Footer } from '../components/page/footer';
import { TopBar } from '../components/page/topBar';
import StatusServices from '../components/dashboard/status';
import AllServices from '../components/dashboard/services';

function Home() {


  return (
    <>
    <div className="w-screen h-screen flex justify-bottom pt-20 flex-col bg-gray-100">
        <TopBar />
        <div className="bg-white shadow-md rounded-md mx-5 flex flex-col">
            <StatusServices />
            <AllServices />
        </div>
        <Footer />
    </div>
    </>
  );
}

export default Home