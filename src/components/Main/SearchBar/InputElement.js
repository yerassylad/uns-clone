import React from 'react'
import styled from 'styled-components'
import SearchIcon from './SearchIcon'

const GhostInput = styled("input")`
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;
  color: #111;
  background: none;
  border: none;
  box-shadow: none;
  outline: none;
  padding: 0;
  margin: 0;
  padding-left: 12px;
  padding-bottom: 2px;
  padding-right: 12px;
`;

const GhostButton = styled('button')`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  box-shadow: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
  color: inherit;
  font: inherit;
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border:0;
  }
`;

const SearchBarForm = styled('form')`
  width: 100%;
  height: 40px;
  border-radius: 24px;
  background-color: #eee;
  font-size: 14px;
  border: 1px solid transparent;
  display: flex;
  position: relative;
  transition: all .1s ease-in-out;
  :active {
    background-color: transparent;
  }
`;

const InputWrapper = styled('div')`
  display: flex;
  flex-grow: 1;
  box-sizing: border-box;
  font-size: 1em;
`;
const InputElement = props => {
  const {onChange, onClick, value} = props;
  return (
    <SearchBarForm>
      <GhostButton onClick={e => e.preventDefault()} ><SearchIcon width={16} height={16} fill="green" /></GhostButton>
      <InputWrapper><GhostInput placeholder="Search free high-resolution photos" value={value} onChange={e => onChange(e.target.value)} /></InputWrapper>
    </SearchBarForm>
  )
}

export default InputElement
