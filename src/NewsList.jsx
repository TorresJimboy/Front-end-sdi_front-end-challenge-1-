import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import authorsData from './authors.json';
import newsData from './news.json';
import './NewsList.css';

const NewsList = () => {
  const [authors, setAuthors] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    setAuthors(authorsData);
    setNews(newsData);
  }, []);

  const firstNewsItem = news[0];
  const firstAuthor = authors.find(author => author.id === firstNewsItem?.author_id);

  return (
    <div className="news-list">
      {firstNewsItem && firstAuthor && (
        <NewsItem key={firstNewsItem.id} article={firstNewsItem} author={firstAuthor} />
      )}
      <div className="pagination">
        <button>1</button>
        <button>2</button>
        <button>...</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
        <button>11</button>
        <button>12</button>
        <button>13</button>
        <button>14</button>
        <button>...</button>
        <button>56</button>
        <button>57</button>
      </div>
    </div>
  );
};

export default NewsList;
