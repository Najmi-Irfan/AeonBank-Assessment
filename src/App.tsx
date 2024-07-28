import styled, { ThemeProvider } from 'styled-components'
import { CalculatorComponent } from './answers/calculator'
import { NavbarComponent } from './answers/navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { theme } from './constant/theme'
import { useState } from 'react'
import { MCQComponent } from './extra/mcq'
import { SumViewComponent } from './extra/sumTwo'

function App () {
  const [display, setDisplay] = useState(-1)

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <div style={{ height: '100%' }}>
          {display === -1 && (
            <h2 style={{ marginTop: '10px' }}>Challenge Answer Selection</h2>
          )}
          {challengeList.map(item => (
            <>
              {item.id === display ? (
                <div>{item.display}</div>
              ) : (
                display === -1 && (
                  <div>
                    <SelectionButton onClick={() => setDisplay(item.id)}>
                      {item.name}
                    </SelectionButton>
                  </div>
                )
              )}
            </>
          ))}
        </div>
        {/* <footer>
          {display !== -1 && (
            <BackButton onClick={() => setDisplay(-1)}>Go Back</BackButton>
          )}
        </footer> */}
      </div>
    </ThemeProvider>
  )
}

export default App

const BackButton = styled.button`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  left: 15px;
  font-size: 12px;
`

const SelectionButton = styled.button`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
`

const challengeList = [
  { id: 0, name: 'MCQ Answer', display: <MCQComponent /> },
  { id: 1, name: 'Add Two Numbers', display: <CalculatorComponent /> },
  { id: 2, name: 'Navbar View', display: <NavbarComponent /> },
  {
    id: 3,
    name: 'Two Sum II - Input Array Is Sorted',
    display: <SumViewComponent />
  }
]
