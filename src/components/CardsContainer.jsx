import {useState, useEffect} from 'react'
import axios from "axios"
import styled from 'styled-components';

import {AiOutlinePlus} from 'react-icons/ai'
import {FiMoreHorizontal} from 'react-icons/fi'

const Container = styled.div`
  /* margin: 0 30px; */
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  
`
const Column = styled.div`
  width: 270px;
  margin-left: 30px ;
  
  
`

const Top = styled.div`
  height: 70px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`

const Bottom = styled.div`
  background: transparent;
  
  
`
const Left = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center ;
  width: 40%;
`

const Right = styled.div`
  display: flex;
  justify-content:  space-around;
  align-items: center ;
  width: 20%;
  font-size: 20px;
`

const Quantity = styled.p``

const Add = styled.div`
  cursor: pointer;
`

const MoreOptions = styled.div`
  cursor: pointer;
`

const Card = styled.div`
  height: 100px;
  width: 270px;
  background: #fff;
  box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  margin: 10px 0 0 0;
  
`

const UserId = styled.div`
  display: flex;
  justify-content: space-between;
`

const Id = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: grey;
`
const Circle = styled.div`
  height: ${props => props.r}px;
  width: ${props => props.r}px;
  border-radius: 50%;
  background: grey;
`

const Image = styled.img``

const Title = styled.p`
  font-size: 15px;
  font-weight: 600;
`
const Tag = styled.p`
  font-size: 12px;
  font-weight: 400;
`

const TagContainer = styled.div`
  display: flex;
  align-items: center;
`


const CardsContainer = () => {

  const [tickets, setTickets] = useState();
  const [users, setUsers] = useState();
  console.log(tickets);
  console.log(users);

  useEffect(()=>{
    const getInfo = async()=>{
      try{
        const res = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
        setTickets(res.data.tickets);
        setUsers(res.data.users);
      }catch(err)
      {
        console.log(err);
      }
    }
    
    getInfo();
  }, [])

  return (
    <Container>

      <Column>
        <Top>

          <Left>
            <Circle r={15}></Circle>
            <Title>Todo</Title>
            <Quantity>2</Quantity>
          </Left>

          <Right>
            <Add> <AiOutlinePlus/> </Add>
            <MoreOptions> <FiMoreHorizontal/> </MoreOptions>
          </Right>
        </Top>
        
        <Card>
          <UserId>
            <Id>CAM-10</Id>
            <Circle r={20}>
              <Image/>
            </Circle>
          </UserId>
          
          <Title>Conduct Security Vulnerability Assessment</Title>
          <Tag>Feature Request</Tag>
        </Card>
      </Column>
      <Column>
        <Top>

          <Left>
            <Circle r={15}></Circle>
            <Title>Todo</Title>
            <Quantity>2</Quantity>
          </Left>

          <Right>
            <Add> <AiOutlinePlus/> </Add>
            <MoreOptions> <FiMoreHorizontal/> </MoreOptions>
          </Right>
        </Top>
        
        <Card>
          <UserId>
            <Id>CAM-10</Id>
            <Circle r={20}>
              <Image/>
            </Circle>
          </UserId>
          
          <Title>Conduct Security Vulnerability Assessment</Title>
          <TagContainer>
            {/* <Circle r={10} /> */}
            <Tag>Feature Request</Tag>
          </TagContainer>
          
        </Card>
      </Column>


      <Column>
        <Top>

          <Left>
            <Circle r={15}></Circle>
            <Title>Todo</Title>
            <Quantity>2</Quantity>
          </Left>

          <Right>
            <Add> <AiOutlinePlus/> </Add>
            <MoreOptions> <FiMoreHorizontal/> </MoreOptions>
          </Right>
        </Top>

        <Bottom>
        
          <Card>
            <UserId>
              <Id>CAM-10</Id>
              <Circle r={20}>
                <Image/>
              </Circle>
            </UserId>
            
            <Title>Conduct Security Vulnerability Assessment</Title>
            <Tag>Feature Request</Tag>
          </Card>

         

          <Card>
            <UserId>
              <Id>CAM-10</Id>
              <Circle r={20}>
                <Image/>
              </Circle>
            </UserId>
            
            <Title>Conduct Security Vulnerability Assessment</Title>
            <Tag>Feature Request</Tag>
          </Card>

          <Card>
            <UserId>
              <Id>CAM-10</Id>
              <Circle r={20}>
                <Image/>
              </Circle>
            </UserId>
            
            <Title>Conduct Security Vulnerability Assessment</Title>
            <Tag>Feature Request</Tag>
          </Card>

        </Bottom>
      </Column>



      <Column>
        <Top>

          <Left>
            <Circle r={15}></Circle>
            <Title>Todo</Title>
            <Quantity>2</Quantity>
          </Left>

          <Right>
            <Add> <AiOutlinePlus/> </Add>
            <MoreOptions> <FiMoreHorizontal/> </MoreOptions>
          </Right>
        </Top>
        
        <Card>
          <UserId>
            <Id>CAM-10</Id>
            <Circle r={20}>
              <Image/>
            </Circle>
          </UserId>
          
          <Title>Conduct Security Vulnerability Assessment</Title>
          <Tag>Feature Request</Tag>
        </Card>
      </Column>



      <Column>
        <Top>

          <Left>
            <Circle r={15}></Circle>
            <Title>Todo</Title>
            <Quantity>2</Quantity>
          </Left>

          <Right>
            <Add> <AiOutlinePlus/> </Add>
            <MoreOptions> <FiMoreHorizontal/> </MoreOptions>
          </Right>
        </Top>
        
        <Card>
          <UserId>
            <Id>CAM-10</Id>
            <Circle r={20}>
              <Image/>
            </Circle>
          </UserId>
          
          <Title>Conduct Security Vulnerability Assessment</Title>
          <Tag>Feature Request</Tag>
        </Card>
      </Column>



      <Column>
        <Top>

          <Left>
            <Circle r={15}></Circle>
            <Title>Todo</Title>
            <Quantity>2</Quantity>
          </Left>

          <Right>
            <Add> <AiOutlinePlus/> </Add>
            <MoreOptions> <FiMoreHorizontal/> </MoreOptions>
          </Right>
        </Top>
        
        <Card>
          <UserId>
            <Id>CAM-10</Id>
            <Circle r={20}>
              <Image/>
            </Circle>
          </UserId>
          
          <Title>Conduct Security Vulnerability Assessment</Title>
          <Tag>Feature Request</Tag>
        </Card>
      </Column>
     
    </Container>
  )
}

export default CardsContainer