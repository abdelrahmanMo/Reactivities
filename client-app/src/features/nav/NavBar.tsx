import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import './NavBar.css';

interface IProps {
    openCreateForm: () => void,

}

const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
    return (
        <Menu fixed='top' inverted className='header'>
            <Container>
                <Menu.Item header className="header__logo">
                    <img src="/assets/logo.png" className="header__logo__img" alt="logo" />
            Reactivities
        </Menu.Item>
                <Menu.Item
                    name='Activities'
                />
                <Menu.Item>
                    <Button onClick={(openCreateForm)} positive content='Create Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
