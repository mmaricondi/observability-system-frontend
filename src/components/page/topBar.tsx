
import { LogoIcon } from '../../assets/icons';

export function TopBar() {
    return (
        <div className='fixed w-full p-5 top-0 left-0 bg-gray-100 flex flex-row justify-between'>
            <div className=''>{<LogoIcon />}</div>
            <a className='mr-5' href='javascript:;'>Logout</a>
        </div>
    )
}