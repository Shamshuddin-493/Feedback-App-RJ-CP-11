import {Component} from 'react'

import Emoji from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {
    isEmojiClicked: false,
  }

  onClickEmoji = () => {
    this.setState({isEmojiClicked: true})
  }

  renderFeedbackQsn = () => {
    const {emojis} = resources
    return (
      <div>
        <h1>How satisfied are you with our customer support performance?</h1>
        <ul className="emoji-list">
          {emojis.map(each => (
            <Emoji
              resource={each}
              key={each.id}
              onClickEmoji={this.onClickEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-card">
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1 className="thank-you-card">Thank You</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div>
        <div className="card">
          {isEmojiClicked
            ? this.renderThankYouScreen()
            : this.renderFeedbackQsn()}
        </div>
      </div>
    )
  }
}

export default App
