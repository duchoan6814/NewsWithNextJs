import Layout from "./Layout"
import Link from 'next/link'
export default () => {
    return (
        <Layout>
            <div className="jumbotron">
                <div className='container'>
                    <h1 className="display-4">Next News</h1>
                    <p className="lead">Next News được xây dựng để củng cố lại kiến thức, cũng như áp dụng những kiến thức đã học được về Reactjs hay Nextjs vào dự án. Nhằm tạo ra một trang báo sử dụng công nghệ của Nextjs.</p>
                    <hr className="my-4" />
                    <p>Bạn có thể di chuyển tới trang News tại đây.</p>
                    <Link href="/News"><a className="btn btn-primary btn-lg" role="button">Go to News</a></Link>
                </div>
            </div>
        </Layout>
    )
}