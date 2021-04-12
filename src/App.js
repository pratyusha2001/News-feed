import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [data, setData] = useState({ articles: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2719918152a7463492d900316ee90bf1',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {data.articles.map(item => (
        <div key={item.source.id} className="list">

          <div class="card">
            <div class="card-header text-center">
              <p><h2>{item.source.name}</h2>by {item.author}</p></div>
            <div class="card-body">

              <h5 class="card-title text-center">{item.title}</h5>
              <p class="card-text">Published At: {item.publishedAt}</p>
              <p> {item.description}</p>
              <p>{item.content}</p>
              <img src={item.urlToImage} alt="image"></img>
              <div><a href={item.url} className="btn btn-primary">Read full article!</a></div>
            </div>
          </div></div>
      ))}

    </div>
  );
}

export default App;
