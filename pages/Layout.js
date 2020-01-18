import Head from 'next/head'
import { Container } from 'reactstrap'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Layout = (props) => (
    <div>
        <Head>
            <title>Demo Next js</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        </Head>
        <Navbar />
        {props.children}

        <Footer/>
    </div>
)

export default Layout