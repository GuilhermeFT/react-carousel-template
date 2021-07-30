import { Carousel } from './components/Carousel'

import './styles/global.scss'

function App() {
  return (
    <Carousel>
      <div style={{ height: '100%', width: '100%', backgroundColor: 'green' }}>
        <h2>Banner 1</h2>
      </div>
      <div style={{ height: '100%', width: '100%', backgroundColor: 'red' }}>
        <h2>Banner 2</h2>
      </div>
      <div style={{ height: '100%', width: '100%', backgroundColor: 'yellow' }}>
        <h2>Banner 3</h2>
      </div>
      <div style={{ height: '100%', width: '100%', backgroundColor: 'pink' }}>
        <h2>Banner 4</h2>
      </div>
    </Carousel>
  )
}

export default App
