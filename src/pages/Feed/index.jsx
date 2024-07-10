import { useEffect, useState } from 'react';
import { Card } from '../../components/Card'
import './styles.css'
import { api } from '../../lib/axios'

export function Feed() {
  
  const [ posts, setPosts ] = useState([]) //Um array vazio para representar um variável que será preenchida em breve

  useEffect(() => { 
    api.get('/posts')
    .then((response) => {
      setPosts(response.data)
    })
    .catch((err) => {
      console.log(err)
    }) 
  }, [])

  return (
    <div className="feedContainer">
      {posts.map((post) => (
        <Card key={post.id} post={post}/> 
      ))}
    </div>
  );
}
