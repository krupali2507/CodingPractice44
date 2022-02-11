import {Component} from 'react'

import {
  BgContainer,
  MemeInputContainer,
  Heading,
  MemeFormContainer,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
  MemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {imageUrl, topText, bottomText, fontSize} = this.state

    this.setState({
      imageUrl,
      topText,
      bottomText,
      fontSize,
    })
  }

  renderInputForm = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <MemeFormContainer onSubmit={this.onSubmitForm}>
        <CustomLabel htmlFor="imageUrl">Image Url</CustomLabel>
        <CustomInput
          type="text"
          id="imageUrl"
          placeholder="Enter Image Url"
          onChange={this.onChangeUrl}
          value={imageUrl}
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          placeholder="Enter Top Text"
          onChange={this.onChangeTopText}
          value={topText}
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          placeholder="Enter Bottom Text"
          onChange={this.onChangeBottomText}
          value={bottomText}
        />
        <CustomLabel htmlFor="fontSize">Font Size</CustomLabel>
        <CustomSelect onChange={this.onChangeFontSize} value={fontSize}>
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton>Generate</GenerateButton>
      </MemeFormContainer>
    )
  }

  renderMeme = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={imageUrl}>
        <TextContent activeFontSize={fontSize}>{topText}</TextContent>
        <TextContent activeFontSize={fontSize}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <BgContainer>
        <MemeInputContainer>
          <Heading>Meme Generator</Heading>
          {this.renderInputForm()}
          {this.renderMeme()}
        </MemeInputContainer>
      </BgContainer>
    )
  }
}

export default MemeGenerator
