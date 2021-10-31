import { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import Loading from "./Loading";
import { connect } from "react-redux";

const Articles = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if(props.favourites){
      let favouritesIDs = ""
      for(let i = 0 ; i < window.localStorage.length ; i++)
      {
        favouritesIDs += window.localStorage.key(i)
      }
      fetchAllPosts(favouritesIDs)
    } else {
      let favouritesIDs = ""
      fetchAllPosts(favouritesIDs)
    }
    
      
  }, [props.sort, props.filter, props.page, props.favourites]);

  const fetchAllPosts = (favouritesIDs) => {
        axios
    .get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=24&_sort=${props.sort}&_start=${(props.page-1)*24}&${favouritesIDs}title_contains=${props.filter.titleFilter}`)
    .then((result) => {
      setArticles(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  if(articles.length !== 0) {
    return (
      <div className="w-full flex flex-wrap justify-around 2xl:w-4/5 2xl:float-right">
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
    filter: state.filter,
    sort: state.sort,
    page: state.pagination,
    favourites: state.favourites
  }
}

export default connect(mapStateToProps)(Articles);
