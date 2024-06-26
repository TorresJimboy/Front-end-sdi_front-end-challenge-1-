import React from 'react';
import { tmsphLogo, tmsphLsMidafood, tmsphLaunchesToyotaRentacar, tmpLalamovePartnership } from './assets';

const imageMap = {
  tmsphLogo,
  tmsphLsMidafood,
  tmsphLaunchesToyotaRentacar,
  tmpLalamovePartnership
};

const NewsItem = ({ article, author }) => {
  const formattedDate = new Date(article.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const articleImage = imageMap[article.image_url];
  const authorImage = imageMap[author.avatar_url];

  return (
    <div className="news-item">
      <img src={articleImage} alt={article.title} className="news-image" />
      <div className="news-content">
        <div className="news-date">{formattedDate}</div>
        <div className="news-author">
          <span>{author.name}</span>
        </div>
        <h1 className="news-title">{article.title}</h1>
        <p className="news-body">{article.body}</p>
        <div className = "read" >READ ARTICLE</div>
        
      </div>
    </div>
  );
};

export default NewsItem;
