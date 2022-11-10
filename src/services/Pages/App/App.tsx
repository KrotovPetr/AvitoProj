import React, {FC} from 'react';

const App: FC = () => {
    const getArticles = (function(url: string):any{
        let response = fetch(url).then((res:any)=>{
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка ${res.status}`);
            }
        }).then((data: any)=>{
            return data;
        })
    })("https://hacker-news.firebaseio.com/v0/newstories")
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
