import './header.css';

function Header() {
  return (
    <div className="Header">
      <Title />
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

export default Header;
