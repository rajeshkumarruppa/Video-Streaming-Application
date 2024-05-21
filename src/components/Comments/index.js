
import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const addName = event => setName(event.target.value)
  const [commentText, setCommentText] = useState('')
  const addComment = event => setCommentText(event.target.value)

  const [commentsList, setCommentsList] = useState([])
  const onAddComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
    setName("");
    setCommentText("");
  }
 

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={addName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={addComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachcomment=>(
          <CommentItem key={eachcomment.id} commentDetails={eachcomment}/>
  ))}
      </CommentsList>
      
    </CommentsContainer>
  )
}
export default Comments
