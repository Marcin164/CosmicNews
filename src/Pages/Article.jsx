import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import parse from "html-react-parser";
import Loading from "../Components/Loading"

const Article = () => {
  const [article, setArticle] = useState({});
  const [articleBody, setArticleBody] = useState("");
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    getArticles()
  }, [Object.keys(article).length]);

  const getArticles = () => {
    axios
      .get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
      .then((result) => {
        setArticle(result.data);
        setLoading(true)
        getScrapedArticle()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getScrapedArticle = () => {
    axios
    .post(`http://127.0.0.1:8080/web`, {
      url: article.url,
      site: article.newsSite,
    })
    .then((result) => {
      setArticleBody(parse(result.data));
    })
    .catch((error) => console.log(error));
  }

  if(loading){
    return (
      <>
        <img
          src={article.imageUrl}
          alt={article.imageUrl}
          className="w-full h-1/2"
        />
        <div className="px-3 font-bold text-3xl md:py-8 md:px-10 xl:px-10 xl:text-center 2xl:text-center xl:py-8 2xl:py-8">{article.title}</div>
        <div className="py-5 px-10 font-extralight text-gray-400 flex">
          <div className="w-1/3 text-center">
            Published at: {article.publishedAt.slice(0, 10)}
          </div>
          <div className="w-1/3 text-center">
            Published by: {article.newsSite}
          </div>
        </div>
        <div className="px-3 text-xl">{articleBody}</div>
        <div className="px-3 py-5 text-gray-500 font-bold">
          Entire article from: <a href={article.url} target="_blank" rel="noreferrer">{article.url}</a>
        </div>
      </>
    );
  }else{
    return <Loading />
  }
  
};

export default Article;
