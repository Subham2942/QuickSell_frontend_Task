import React from "react";
import styled from "styled-components";

import Card from "./Card";

import { AiOutlinePlus } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

const Container = styled.div`
  min-width: 270px;
  width: 18%;
  /* margin-left: 30px ; */
  padding-bottom: 20px;
`;

const Top = styled.div`
  height: 70px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bottom = styled.div`
  background: transparent;
`;
const Left = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 40%;
`;

const Right = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  font-size: 20px;
`;

const Quantity = styled.p``;

const Add = styled.div`
  cursor: pointer;
`;

const MoreOptions = styled.div`
  cursor: pointer;
`;

const Circle = styled.div`
  height: ${(props) => props.r}px;
  width: ${(props) => props.r}px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: 600;
`;

const Column = ({heading, data, groupBy}) => {

    const modTickets = data.tickets && data.tickets.filter(ticket => {
        return ticket[groupBy] === heading;
    })

    const priorityList = [
        "No priority", // Priority level 0
        "Low",         // Priority level 1
        "Medium",      // Priority level 2
        "High",        // Priority level 3
        "Urgent"       // Priority level 4
      ];

    const userNames = data?.users && data.users.map(user => user.name);
    console.log('username:', userNames);
  return (
    <Container>
      <Top>
        <Left>
          <Circle r={15}></Circle>
          <Title>{groupBy === 'priority' ? priorityList[heading] : groupBy === 'userId' ? userNames[data.users.findIndex(user => user.id === heading)] :  heading }</Title>
          <Quantity>2</Quantity>
        </Left>

        <Right>
          <Add>
            <AiOutlinePlus />
          </Add>
          <MoreOptions>
            <FiMoreHorizontal />
          </MoreOptions>
        </Right>
      </Top>

      <Bottom>
        {modTickets && modTickets.map(ticket => (
             <Card ticket={ticket} />
        ))}
       
      </Bottom>
    </Container>
  );
};

export default Column;
