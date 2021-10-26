import { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import Loading from "./Loading";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles?_limit=24")
      .then((result) => {
        setArticles(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if(articles.length !== 0) {
    return (
      <div className="container flex flex-wrap justify-around 2xl:w-4/5 2xl:float-right">
        {articles.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            publishedAt={article.publishedAt}
            imageUrl={article.imageUrl}
            newsSite={article.newsSite}
            id={article.id}
          />
        ))}
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Articles;
