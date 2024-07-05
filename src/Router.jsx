import {Routes, Route} from 'react-router-dom'
import { CreatePost } from './pages/CreatePost'
import { Feed } from './pages/Feed'
import { OnePost } from './pages/OnePost'
import { UpdatePost } from './pages/UpdatePost'

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<Feed /> }/> 
      <Route path="/createPost" element={<CreatePost />} /> 
      <Route path="/onePost" element={<OnePost />} />
      <Route path="/updatePost" element={<UpdatePost />} /> 
    </Routes>
  )
}