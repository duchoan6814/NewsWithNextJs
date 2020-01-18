import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
                <Link href="/"><a className="navbar-brand">NextNews</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link href="/"><a className="nav-link" >Home <span className="sr-only">(current)</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/News"><a className="nav-link" >News</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/About">
                                <a className='nav-link'>About</a>
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;