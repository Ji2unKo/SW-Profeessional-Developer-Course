import './App.css'
import Button from './components/Button.jsx'
import Heading from './components/Heading.jsx'
import Flex from './components/Flex.jsx'
 './components/Heading.jsx'

function App() {
  return (
    <>
     <Flex>
      <Heading title = "안녕하세요" />
      <Button name="1번버튼" primary/>
      <Button name="2번버튼" secondary/>
      <Button name="3번버튼" color="grey" size="24px"/>
     </Flex>
    </>
  )
}

export default App
