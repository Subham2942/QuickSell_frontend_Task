import React from "react";
import styled from "styled-components";

import Card from "./Card";

import { AiOutlinePlus } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

import { useMyContext } from "../context/myContext";


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

const Column = ({ heading, data }) => {

  const {groupBy} = useMyContext();

  const modTickets =
    data.tickets &&
    data.tickets.filter((ticket) => {
      return ticket[groupBy] === heading;
    });

  const priorityList = [
    "No priority", // Priority level 0
    "Low", // Priority level 1
    "Medium", // Priority level 2
    "High", // Priority level 3
    "Urgent", // Priority level 4
  ];

  const userNames = data?.users && data.users.map((user) => user.name);
  console.log("username:", userNames);

  const sortModTicketsByTitle = (data)=>{
    return data.slice().sort((a,b)=>{
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      if(titleA < titleB) return -1;
      if(titleA > titleB) return 1;
      return 0;
    })
  }

  const sortModTicketsByPriority = (data)=>{
    return data.slice().sort((a,b)=>{
      const priorityA = a.priority;
      const priorityB = b.priority;

      if(priorityA < priorityB) return 1;
      if(priorityA > priorityB) return -1;
      return 0;
    })
  }

  const {ordering} = useMyContext();

  const sortedTicket = ordering === 'title' ? sortModTicketsByTitle(modTickets) : sortModTicketsByPriority(modTickets);

  return (
    <Container>
      <Top>
        <Left>
          <Circle r={15}></Circle>
          <Title>
            {groupBy === "priority"
              ? priorityList[heading]
              : groupBy === "userId"
              ? userNames[data.users.findIndex((user) => user.id === heading)]
              : heading}
          </Title>
          <Quantity>{modTickets && modTickets.length}</Quantity>
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
        {sortedTicket && sortedTicket.map((ticket) => <Card ticket={ticket} />)}
      </Bottom>
    </Container>
  );
};

export default Column;
