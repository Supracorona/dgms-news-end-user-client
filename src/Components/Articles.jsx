import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

const Articles = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state);

  const fetchArticles = async () => {
    const response = await axios.get("api/articles");
    dispatch({ type: "SET_ARTICLES", payload: response.data.articles });
  };

  const displayArticles = (articles) => {
    let articlesArray = [];
    Object.entries(articles).map((category) => {
      articlesArray.push(category[1]);
    });
    return articlesArray.flat();
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const articleList = displayArticles(articles).map((article) => {
    return (
      <li key={article.id} style={{ listStyleType: "none" }}>
        <Link to={`/article/${article.id}`}>
          <img
            src={article.image}
            alt=""
            style={{ height: 200 + "px", width: "auto" }}
          />
          <div data-cy="show-button">
            <h1>{article.title}</h1>{" "}
          </div>
        </Link>
      </li>
    );
  });
  return (
    <Container>
      <ul data-cy="articles-list">{articleList}</ul>
    </Container>
  );
};

export default Articles;
