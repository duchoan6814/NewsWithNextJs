
import React from 'react';
import Layout from './Layout';
import NewsItem from '../component/NewsItem';
import fetch from 'isomorphic-unfetch';

const News = (props) => {
    return (
        <Layout>
            <div className="container py-5">
                <h1>News daily.</h1>
                <hr></hr>
                <div className="row">
                    {
                        props.news.articles.map((tin,key)=>(
                            <NewsItem key={tin.source.id } news={tin}/>
                            
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}


News.getInitialProps = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2020-01-14&to=2020-01-14&sortBy=popularity&apiKey=21105020649e498283c05f6fa7ab0cb4`);
    const data = await res.json();

    console.log(data);

    return {
        news: data
    }

}

export default News;