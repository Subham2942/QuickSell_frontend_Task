import styled from "styled-components";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

const Container = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  background-color: #eee;
  /* border: 2px solid black; */
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const DisplayMenu = styled.form`
  margin: 0 0 0 20px;
  /* border: 1px solid black; */
  width: 100px;
  height: 28px;
  /* padding: 2px 5px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 15px;
  background-color: #fff;
`;
const Label = styled.label`
  user-select: none; /* Disable text selection */
  -moz-user-select: none; /* For Firefox */
  -webkit-user-select: none; /* For Chrome, Safari, and Opera */
  -ms-user-select: none; /* For Internet Explorer and Edge */
`;

const DisplaySettings = styled.div`
  height: 90px;
  width: 250px;
  /* border: 1px solid black; */
  margin: 50px 0 0 20px;
  position: fixed;
  background-color: #eee;
  border-radius: 7px;
  box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`;
const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  font-weight: 500;
  color: gray;
`;

const Select = styled.select`
  width: 100px;
  border-radius: 3.5px;
`;

const Option = styled.option`
  font-size: 15px;
  /* &:hover{
        background-color: gray;
    } */
`;

const Navbar = () => {
  const [showDisplaySettings, setShowDisplaySettings] = useState(false);


  const handleShowDisplaySettings = () => {
    setShowDisplaySettings(!showDisplaySettings);
  };


  return (
    <>
      <Container>
        <DisplayMenu onClick={handleShowDisplaySettings} >
          <HiOutlineAdjustmentsHorizontal />
          <Label htmlFor="display">Display</Label>
          {showDisplaySettings ? (
            <MdKeyboardArrowUp id="display" />
          ) : (
            <MdKeyboardArrowDown id="display" />
          )}
        </DisplayMenu>
      </Container>

      {showDisplaySettings && 
      <DisplaySettings>
        <Filter>
          <Label>Grouping</Label>
          <Select defaultValue={"status"}>
            <Option value="status"> Status </Option>
            <Option value="user"> User </Option>
            <Option value="priority"> Priority </Option>
          </Select>
        </Filter>
        <Filter>
          <Label>Ordering</Label>
          <Select defaultValue={"priority"}>
            <Option value="priority"> Priority </Option>
            <Option value="title"> Title </Option>
          </Select>
        </Filter>
      </DisplaySettings>}
      
    </>
  );
};

export default Navbar;
