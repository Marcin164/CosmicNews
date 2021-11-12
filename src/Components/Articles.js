import { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import Loading from "./Loading";
import { connect } from "react-redux";

const Articles = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { 
    fetchAllPosts();
    setLoading(false)
  }, [props.sort, props.filter, props.page, props.favourites]);

  const fetchAllPosts = () => {
    axios
      .get(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=24&${props.favourites}_sort=${
          props.sort
        }&_start=${(props.page - 1) * 24}&title_contains=${
          props.filter.titleFilter
        }`
      )
      .then((result) => {
        setLoading(true);
        setArticles(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return (
      <div className="w-screen flex flex-wrap justify-around 2xl:relative 2xl:w-4/5 2xl:float-right">
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

const mapStateToProps = (state) => {
  return {
    page: state.pagination,
  };
};

export default connect(mapStateToProps)(Articles);
