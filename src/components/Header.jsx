import MenuIcon from '../assets/menu-icon.png'

function Header({ toggleDrawer }) {
    return <header className="h-16 bg-black lg:bg-transparent flex flex-col justify-center p-3">
        <img src={MenuIcon} alt="menu"
            onClick={toggleDrawer}
            className="h-8 w-8 lg:h hover:cursor-pointer lg:hidden"></img>
    </header>
}
export default Header;