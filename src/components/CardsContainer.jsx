import { useState, useEffect } from "react";
import { useMyContext } from "../context/myContext";
import styled from "styled-components";

import Column from "./Column";

import { fetchInfo } from "../api/fetchData";

const Container = styled.div`
  /* margin: 0 30px; */
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  padding: 0 30px;
  gap: 30px;
`;

const CardsContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      await fetchInfo()
        .then((res) => {
          setData(res);
        })
        .catch((err) => console.log(err));
    };

    getInfo();
  }, []);

  // console.log(tickets);
  // console.log(users);

  const getUniqueStatus = (tickets) => {
    const result = new Set();
    for (let ticket of data.tickets) {
      result.add(ticket.status);
    }

    return Array.from(result);
  };

  // const [groupBy, setGroupBy] = useState("status");

  const {groupBy} = useMyContext();

  const status = data && data.tickets && getUniqueStatus(data.tickets);
  console.log(status);

  const priority = [0, 1, 2, 3, 4];

  return (
    <Container>
      {groupBy === "status" && status
        ? status.map((currStatus) => (
            <Column heading={currStatus} data={data}  />
          ))
        : groupBy === "priority" && priority
        ? priority.map((currPriority) => (
            <Column heading={currPriority} data={data}  />
          ))
        : data?.users &&
          data?.users.map((user) => (
            <Column heading={user.id} data={data}  />
          ))}
    </Container>
  );
};

export default CardsContainer;
