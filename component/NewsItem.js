import Link from 'next/link';

export default ({news}) => {
    return (
        <div className="col-4 mb-4">
            <div className="card">
                <Link as={`/News/${news.source.id}`} href={{pathname:'/NewsDetail', query:{news:JSON.stringify(news)} }}><a><img className="card-img-top" src={news.urlToImage} alt="" /></a></Link>
                <div className="card-body">
                    <Link as={`/News/${news.source.id}`} href={{pathname:'/NewsDetail', query:{news:JSON.stringify(news)} }}><a><h4 className="card-title">{news.title}</h4></a></Link>
                    <p className="card-text">{news.description}</p>
                </div>
            </div>
        </div>
    )
}