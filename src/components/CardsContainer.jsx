import {useState, useEffect} from 'react'
import styled from 'styled-components';

import Column from './Column';

import {fetchInfo} from '../api/fetchData'

const Container = styled.div`
  /* margin: 0 30px; */
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  padding: 0 30px;
  gap: 30px;
  
`




const CardsContainer = () => {

  const [data, setData] = useState({});
  
   


  useEffect( ()=>{

    const getInfo = async ()=>{
      await fetchInfo()
      .then(res =>
        {
          setData(res);
        })
      .catch(err => console.log(err))
      
    }
    
    getInfo();

    
    
  }, [])

  // console.log(tickets);
  // console.log(users);

  const getUniqueStatus = (tickets) =>{
    const result = new Set();
    for(let ticket of data.tickets)
    {
      result.add(ticket.status);
    }

    return Array.from(result);
  }

  const [groupBy, setGroupBy] = useState('priority');

  const status = data && data.tickets && getUniqueStatus(data.tickets);
  console.log(status);

  const priority = [0,1,2,3,4];
  
  return (
    <Container>

      {/* {status && status.map(currStatus => (
        <Column heading={currStatus} data={data} groupBy={groupBy} />
      ))} */}

      {/* {data?.users && data?.users.map(user => (
        <Column heading={user.id} data={data} groupBy={groupBy} />
      ))} */}
      
      {priority && priority.map(currPriority => (
        <Column heading={currPriority} data={data} groupBy={groupBy} />
      ))}

    </Container>
  )
}

export default CardsContainer