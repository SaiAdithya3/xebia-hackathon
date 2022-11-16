import React, {useState, useEffect} from 'react'

export default function Posts() {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    return fetch("http://localhost:5000/api/posts/")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])


  return (
    <main>
      <h1>User List</h1>
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.username}>{userObj.username}</li>
          ))}
      </ul>
    </main>
  );
}


