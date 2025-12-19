// Write your React code here.

import './index.css'

const Emoji = props => {
  const {resource, onClickEmoji} = props
  const {id, name, imageUrl} = resource
  const emojiclicked = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-item">
      <img src={imageUrl} alt={name} onClick={emojiclicked} />
      <p>{name}</p>
    </li>
  )
}

export default Emoji
