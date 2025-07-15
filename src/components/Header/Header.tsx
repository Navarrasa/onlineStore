import { Link } from 'react-router'

function Header() {

  return(
    <header className="bg-gray-800 text-white p-6 flex justify-between">
      <h1 className='px-4 text-xl'>Bem vindo à OnlineStore!</h1>
      <nav className="flex px-4">
        <ul className="flex gap-8">
          <li className='opacity-80 hover:opacity-100 text-xl transition duration-700 ease-in-out'>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li className='opacity-80 hover:opacity-100 text-xl transition duration-700 ease-in-out'>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li className='opacity-80 hover:opacity-100 text-xl transition duration-700 ease-in-out'>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li className='opacity-80 hover:opacity-100 text-xl transition duration-700 ease-in-out'>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;