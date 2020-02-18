import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: aquamarine;
  border: 2px solid aquamarine;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: aquamarine;
    color: white;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`;

export const Form = styled.form`
  margin: 10px 0px;
`;
