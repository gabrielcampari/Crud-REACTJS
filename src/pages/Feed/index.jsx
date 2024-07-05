import { Card } from '../../components/Card'
import './styles.css'
/* import { useEffect, useState } from 'react';

const [ posts, setPosts ] = useState([]) //Um array vazio para representar um variável que será preenchida em breve

useEffect(() => { //

}, []) */

export function Feed() {
  return (
    <div className="feedContainer">
      <Card />
    </div>
  );
}
