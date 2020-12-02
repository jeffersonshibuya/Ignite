import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../../actions/gamesAction';
import logo from '../../img/logo.svg';
import { fadeIn } from '../../util/animations';
import { Logo, StyledNav } from './styles';



const Nav: React.FC = () => {
  const dispatch = useDispatch();
  const [gameName, setGameName] = useState('')

  const searchHandler = (e: any) => {
    e.preventDefault()
    dispatch(fetchSearch(gameName))
    setGameName('');
  }

  const clearSearched = () => {
    dispatch({
      type: 'CLEAR_SEARCHED'
    })
  }

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo"/>
        <h1>Ignite</h1>
      </Logo>
      <form className="search" onSubmit={searchHandler}>
        <input type="text" value={gameName} onChange={(e) => setGameName(e.target.value)}/>
        <button>Search</button>
      </form>
    </StyledNav>
  )
}

export default Nav;