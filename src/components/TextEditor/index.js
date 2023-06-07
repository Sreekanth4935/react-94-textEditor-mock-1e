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
  Button2,
  Button3,
  ListItem,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isActiveFontWeight: false,
    isActiveFontFamily: false,
    isActiveUnderline: false,
    textareaValue: '',
  }

  handleTextareaChange = event => {
    this.setState({
      textareaValue: event.target.value,
    })
  }

  changeUnderLine = () => {
    this.setState(prevState => ({
      isActiveUnderline: !prevState.isActiveUnderline,
    }))
  }

  changeToBold = () => {
    this.setState(prevState => ({
      isActiveFontWeight: !prevState.isActiveFontWeight,
    }))
  }

  changeFontFamily = () => {
    this.setState(prevState => ({
      isActiveFontFamily: !prevState.isActiveFontFamily,
    }))
  }

  render() {
    const {
      textareaValue,
      isActiveFontWeight,
      isActiveFontFamily,
      isActiveUnderline,
    } = this.state
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
              <ListItem id="1">
                <Button
                  onClick={this.changeToBold}
                  isActiveFontWeight={isActiveFontWeight}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </Button>
              </ListItem>

              <ListItem id="2">
                <Button2
                  onClick={this.changeFontFamily}
                  isActiveFontFamily={isActiveFontFamily}
                  type="button"
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </Button2>
              </ListItem>

              <ListItem id="3">
                <Button3
                  onClick={this.changeUnderLine}
                  isActiveUnderline={isActiveUnderline}
                  type="button"
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </Button3>
              </ListItem>
            </IconsContainer>
            <TextArea
              rows={25}
              cols="50"
              isActiveFontFamily={isActiveFontFamily}
              isActiveFontWeight={isActiveFontWeight}
              isActiveUnderline={isActiveUnderline}
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
