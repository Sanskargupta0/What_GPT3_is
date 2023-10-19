import React from 'react';

import './blog.css';
import { Article } from '../../components';
import { Blog1, Blog2, Blog3, Blog4, Blog5} from './import';
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
        <Article imgUrl={Blog1} date="Oct 20, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgUrl={Blog2} date="Oct 20, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={Blog3} date="Oct 20, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={Blog4} date="Oct 20, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={Blog5} date="Oct 20, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
      
    </div>
  )
}

export default Blog
