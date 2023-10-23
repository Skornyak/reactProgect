import  s from './Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="/profile" className={s.link}>Profile</a>
            </div>
            <div className={s.item}>
                <a href="/dialogs" className={s.link}>Massages</a>
            </div>
            <div className={s.item}>
                <a className={s.link}>News</a>
            </div>
            <div className={s.item}>
                <a className={s.link}>Music</a>
            </div>
            <div className={s.item}>
                <a className={s.link}>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;