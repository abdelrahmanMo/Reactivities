import React, { useContext, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import NavBar from '../../features/nav/NavBar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import { observer } from 'mobx-react-lite';


const App = () => {

  const activityStore = useContext(ActivityStore)
  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])
  if (activityStore.loadingInitial) return <LoadingComponent content='Loading activities...' />;
  return (
    <>

      <NavBar />
      <Container className='list__container'>
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
