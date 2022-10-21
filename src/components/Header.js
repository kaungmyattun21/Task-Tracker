import Button from "./Button"


const Header = () => {
  
  const onClick = () => {
    console.log('clicked');
  }

  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button text='Add' onClick={onClick}/>
    </header>
  )
}

export default Header