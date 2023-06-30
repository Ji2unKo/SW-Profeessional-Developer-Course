import './App.css'
import Flex from'./components/Flex'
import Image from'./components/Image'

// import Button from './components/Button.jsx'
// import Heading from './components/Heading.jsx'
// import Flex from './components/Flex.jsx'
//  './components/Heading.jsx'

// function App() {
//   return (
//     <>
//      <Flex>
//       <Heading title = "안녕하세요" />
//       <Button name="1번버튼" primary/>
//       <Button name="2번버튼" secondary/>
//       <Button name="3번버튼" color="grey" size="24px"/>
//      </Flex>
//     </>
//   )
// }

// export default App

const images = [
  {id: 1, url:'/image1.jpeg', title:'코뿔소'},
  {id: 2, url:'/image2.jpeg', title:'아기'},
  {id: 3, url:'/image3.jpeg', title:'가족'},
]

function App() {
  return (
    <>
    <Flex>
     {images.map(image =>(
      <div key={image.id}>
        <Image url={image.url} title={image.title}/>
      <h2>{image.title}</h2>
      </div>
      ))
     }
  
    </Flex>
    </>
    )
  }
  

export default App