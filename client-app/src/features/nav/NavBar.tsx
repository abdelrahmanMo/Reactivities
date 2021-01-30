import React, { useContext } from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import './NavBar.css';
import ActivityStore from "../../app/stores/activityStore";
import { observer } from 'mobx-react-lite';

const NavBar: React.FC = () => {
    const activityStore = useContext(ActivityStore)

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
                    <Button onClick={activityStore.openCreateForm} positive content='Create Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}
export default observer(NavBar)
