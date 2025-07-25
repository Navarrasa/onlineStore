import { Link } from 'react-router'

function Header() {

  return(
    <header className="bg-gray-800 text-white p-6 flex justify-between">
      <h1 className='px-4 text-xl'>Bem vindo à OnlineStore!</h1>
      <nav className="flex px-4">
        <ul className="flex gap-8">
          <li className='opacity-80 text-xl hover:opacity-100 hover:transition hover:duration-700 hover:ease-in-out'>
            <Link to="/">Home</Link>
          </li>
          <li className='opacity-80 text-xl hover:opacity-100 hover:transition hover:duration-700 hover:ease-in-out'>
            <Link to="/home">Products</Link>
          </li>
          <li className='opacity-80 text-xl hover:opacity-100 hover:transition hover:duration-700 hover:ease-in-out'>
            <Link to="/profile">Profile</Link>
          </li>
          <li className='opacity-80 text-xl hover:opacity-100 hover:transition hover:duration-700 hover:ease-in-out'>
            <Link to="/mykart">kart +1</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;