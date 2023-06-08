import {Component} from 'react'
import {GoItalic} from 'react-icons/go'
import {VscBold} from 'react-icons/vsc'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  SecondContainer,
  TextEditorContainer,
  TextAreaContainer,
  Button,
  TextArea,
  IconsContainer,
  ImageTextEditor,
  ListItem,
} from './styledComponents'

const initialButtonsText = [
  {
    buttonImg: <VscBold size={25} />,
    id: 1,
    isActive: false,
    testId: 'bold',
  },
  {
    buttonImg: <GoItalic size={25} />,
    id: 2,
    isActive: false,
    testId: 'italic',
  },

  {
    buttonImg: <AiOutlineUnderline size={25} />,
    id: 3,
    isActive: false,
    testId: 'underline',
  },
]

class TextEditor extends Component {
  state = {
    buttonsText: initialButtonsText,
    textareaValue: '',
  }

  handleTextareaChange = event => {
    this.setState({
      textareaValue: event.target.value,
    })
  }

  changeToStyle = id => {
    this.setState(prevState => ({
      buttonsText: prevState.buttonsText.map(eachButton => {
        if (eachButton.id === id) {
          return {
            ...eachButton,
            isActive: !eachButton.isActive,
          }
        }
        return eachButton
      }),
    }))
  }

  render() {
    const {textareaValue, buttonsText} = this.state
    return (
      <MainContainer>
        <SecondContainer>
          <TextEditorContainer>
            <h1>Text Editor</h1>
            <ImageTextEditor
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor
"
            />
          </TextEditorContainer>
          <TextAreaContainer>
            <IconsContainer>
              {buttonsText.map(eachButton => (
                <ListItem key={eachButton.id}>
                  <Button
                    isActive={eachButton.isActive}
                    onClick={() => this.changeToStyle(eachButton.id)}
                    type="button"
                    data-testid={eachButton.testId}
                  >
                    {eachButton.buttonImg}
                  </Button>
                </ListItem>
              ))}
            </IconsContainer>
            <TextArea
              rows={25}
              cols="50"
              isActiveFontWeight={buttonsText[0].isActive}
              isActiveFontFamily={buttonsText[1].isActive}
              isActiveTextDecoration={buttonsText[2].isActive}
              value={textareaValue}
              onChange={this.handleTextareaChange}
            >
              {textareaValue}
            </TextArea>
          </TextAreaContainer>
        </SecondContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
