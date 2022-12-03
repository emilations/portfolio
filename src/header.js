import './header.css';

function Header() {
  return (
    <div className="Header">
      <Title />
      <Menu />
    </div>
  );
}



function Title() {
  return (
    <div className='title'>
      <div className='title--firstname'>EMILE</div>
      <div className='title--lastname'>MOUANNES</div>
    </div>
    
  )
}

function Menu() {
  return (
    <div className='menu'>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Contact me</li>
      </ul>
    </div>
    
  )
}

export default Header;
