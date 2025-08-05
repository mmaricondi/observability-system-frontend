import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';

function Home() {
  const data = useContext(AuthContext);

  return <h1>🏠 Bem vindo: {data.user?.name}</h1>
}

export default Home