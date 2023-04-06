import {useEffect, useState} from 'react';

function App() {
  const [githubData, setGithubId] = useState([])
  const [githubUser, setGithubUser] = useState("k-duna")

  const fetchData = () => {
    return fetch(`https://developer.github.com/v3/repos/.${githubUser}`)
      .then((response) => response.json())
      .then((data) => setGithubId(data));
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
     <input type="text" placeholder="Search for User" onChange={(e) => setGithubUser(e.target.value)} className="input_search" />
     <button onClick={fetchData} className="search_button">Search Github</button>
     <img src={githubUser.avatar_url} height="100" width="100" />
    <p>{githubUser.name}</p>
    </div>
  );
}

export default App;
