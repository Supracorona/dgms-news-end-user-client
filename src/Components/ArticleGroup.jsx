import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Card } from "semantic-ui-react";

const ArticleGroup = () => {
  const { category } = useParams();
  const { articles } = useSelector((state) => state);

  const articlesList = articles[category]?.map((article) => {
    return (
      <Card>
      <li key={article.id} style={{ listStyleType: "none" }}>
        <Link to={`/article/${article.id}`}>
          <div>
            <h1 data-cy="article-title">{article.title}</h1>{" "}
          </div>
          <img 
            src={article.image}
            alt=""
            style={{ height: 200 + "px", width: "auto" }}
            
          />
        </Link>
      </li>
      </Card>
    );
  });

  return (
    <Container text>
      <div data-cy="category_header"> The latest {category} news </div>
      <ul data-cy="articles-list">{articlesList}</ul>
    </Container>
  );
};

export default ArticleGroup;
