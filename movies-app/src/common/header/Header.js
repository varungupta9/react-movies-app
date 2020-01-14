import React ,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import { isLogicalExpression } from '@babel/types';

class Header extends Component
{
    render()
    {
        return(
            <div>
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo"/>
            <div className="login-btn">
           <Button variant="contained">LOGIN</Button>
            </div>
            </header>
            </div>
        )
    }
}
export default Header;
