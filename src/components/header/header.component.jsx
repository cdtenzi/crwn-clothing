import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/original.svg' 

import './header.styles.scss';


const Header = () => (
<div className='header'>
    <Link to='/' className='logo-cntainer'>
        <Logo className='logo'/>
    </Link>
    <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='' className='option'>CONTACT</Link>
        <Link to='/signin' className='option'>SIGN IN</Link>
    </div>
</div>
);

export default Header;