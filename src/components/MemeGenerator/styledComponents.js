// Style your components here
import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
`

export const MemeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`

export const Heading = styled.h1`
  color: #35469c;
`

export const MemeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const CustomLabel = styled.label`
  font-size: 20px;
  font-family: 'Roboto';
  margin-bottom: 10px;
`

export const CustomInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  width: 50%;
  margin-bottom: 10px;
`
export const CustomSelect = styled.select`
  font-family: 'Roboto';
  width: 50%;
  padding: 10px;
  border-radius: 8px;
`

export const CustomOption = styled.option`
  font-family: 'Roboto';
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  width: 20%;
  font-size: 14px;
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  width: 40%;
`

export const TextContent = styled.p`
  font-size: ${props => props.activeFontSize}px;
  color: white;
`
