import { withRouter } from 'next/router'
import Layout from './Layout';

const NewsDetail = ({ router: { query } }) => {
    const object = JSON.parse(query.news);
    console.log(object.content);

    return (
        <Layout>
            <div className='container mb-5'>
                <img className='img-fluid' src={object.urlToImage} />
                <h1 className='my-5'>{object.title}</h1>
                <hr></hr>
                {object.content.replace(/<[/]?[pb]>/g, '')}
            </div>
        </Layout>
    )
}

export default withRouter(NewsDetail);