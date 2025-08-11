import { useContext } from 'react';
import { LogoIcon } from '../../assets/icons';
import { AuthContext } from '../../contexts/Auth/AuthContext';


export function TopBar() {
    const auth = useContext(AuthContext);
    
    return (
        <div className='fixed w-full p-5 top-0 left-0 bg-gray-100 flex flex-row justify-between'>
            <div className=''>{<LogoIcon />}</div>
            <a className='mr-5' href="#" onClick={(e) => {e.preventDefault(); auth.signout(); window.location.reload();}}>Logout</a>
        </div>
    )
}