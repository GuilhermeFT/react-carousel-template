import { Carousel } from './components/Carousel'

import './styles/global.scss'

// You can create personalized divs in component Carousel

function App() {
  return (
    <Carousel>
      <div style={{ height: '80%', width: '80%', backgroundColor: 'green' }}>
        <h2>Banner 1</h2>
      </div>
      <div style={{ height: '80%', width: '80%', backgroundColor: 'red' }}>
        <h2>Banner 2</h2>
      </div>
      <div style={{ height: '80%', width: '80%', backgroundColor: 'yellow' }}>
        <h2>Banner 3</h2>
      </div>
      <div style={{ height: '80%', width: '80%', backgroundColor: 'pink' }}>
        <h2>Banner 4</h2>
      </div>
    </Carousel>
  )
}

export default App
