
import {styled} from "styled-components";
import Navbar from "./components/Navbar";
import CardsContainer from "./components/CardsContainer";

import { MyContextProvider } from './context/myContext';

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #ddd;
  
`

function App() {
  return (
    <MyContextProvider>
      <Container>
        <Navbar/>
        <CardsContainer/>
      </Container>
    </MyContextProvider>
  );
}

export default App;
