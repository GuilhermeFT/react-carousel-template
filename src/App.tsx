import { Carousel } from './components/Carousel'

import './styles/global.scss'

// You can create personalized divs in component Carousel

function App() {
  return (
    <Carousel>
      <div style={{ height: '80%', width: '80%', backgroundColor: 'green' }}>
        <h2>Banner 1</h2>
      </div>
    </Carousel>
  )
}

export default App
