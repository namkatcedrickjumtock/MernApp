import { Link } from 'react-router-dom'
import AccountMenu from "./AccountAvatar"
const Navbar = () => {

  return (
    <header>
      <div className="flex justify-between px-5 py-5">
        <Link to="/">
          {/* <img src="/icon/workLogo.png" alt="logo"  width={90}/> */}
          <h1 className='text-5xl text-blue-500'>Workout Buddy</h1>
        </Link>
<AccountMenu />
      </div>
    </header>
  )
}

export default Navbar