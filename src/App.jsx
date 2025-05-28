
import Nav from './Nav'
import { ErrorSuccessContextProvider } from './ContextApi/MessageContext'
import SuccessBox from './Components/SuccessBox'


function App() {


  return (
    <div className="relative">
      <ErrorSuccessContextProvider>
        <SuccessBox/>
         <Nav/>
         </ErrorSuccessContextProvider>
       

   </div>
  )
}

export default App
