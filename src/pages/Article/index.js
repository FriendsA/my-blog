import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';
import Header from '../../components/Header';
import BackTop from '../../components/BackTop';
import { useLocation } from 'react-router-dom';
import './index.css';
import httpServer from "../../httpServer";

const ArticleDetail = () => {

    const [articleData, setArticleData] = useState();

    const location = useLocation();

    useEffect(() => {
        httpServer("/articleDetail", { name: location.state.name }).then(res => {
            setArticleData(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className="article-detail">
            <Header />
            <div className="markdown-body">
                <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]} children={articleData} />
            </div>
            <BackTop />
        </div>
    )
}

export default ArticleDetail;