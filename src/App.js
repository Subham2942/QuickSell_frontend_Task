
import {styled} from "styled-components";
import Navbar from "./components/Navbar";
import CardsContainer from "./components/CardsContainer";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #ddd;
  
`

function App() {
  return (
    <Container>
      <Navbar/>
      <CardsContainer/>
    </Container>
  );
}

export default App;
