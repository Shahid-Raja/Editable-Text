import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #f5d5fc;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  height: 200px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h1`
  font-size: 20px;
  font-family: roboto;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Paragraph = styled.p`
  font-size: 15px;
  font-family: roboto;
  padding-right: 10px;
`

export const Input = styled.input`
  height: 18px;
  width: 250px;
  outline: none;
  margin-right: 20px;
  padding: 10px;
`
export const Button = styled.button`
  height: 10px;
  width: 55px;
  cursor: pointer;
  background-color: pink;
  color: #ffffff;
  border-width: 8px;
  font-size: 13px;
  font-family: roboto;
`
