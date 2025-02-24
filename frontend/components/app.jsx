import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

//Global Components 
import Splash from './splash/splash';
import Footer from './footer/footer';

// Patient Components 
import UserLogInFormContainer from './session_form/user_login_form_container';
import UserSignUpFormContainer from './session_form/user_signup_form_container';
import OnboardContainer from './onboard/onboard_container';
import MatchContainer from './matches/match_container';
import AuthLanding from './auth_landing/auth_landing';
import UserChatDashboard from './chatroom/user/user_chat_dashboard';
import UserSettings from './settings/user_settings';

// Therapist Components 
import DemoTherapistContainer from './demo_therapist/demo_therapist_container';
import TherapistChatDashboard from './chatroom/therapist/therapist_chat_dashboard';
import TherapistDashboardContainer from './therapist_dashboard/therapist_dashboard_container';
import NoteFormContainer from './note/note_form_container';
import NewNoteFormContainer from './note/new_note_form_container';
import TherapistSettings from './settings/therapist_settings';


const App = () => (
    <>  
    <Switch> 
        <AuthRoute exact path='/' component={Splash}/>
        <AuthRoute exact path="/user/login" component={UserLogInFormContainer}/>
        <AuthRoute exact path="/user/signup" component={UserSignUpFormContainer}/>
        <AuthRoute exact path="/therapist/login" component={DemoTherapistContainer}/>
        
        <ProtectedRoute exact path="/auth/user/onboard" component={OnboardContainer}/>
        <ProtectedRoute exact path="/auth/landing" component={AuthLanding}/>
        <ProtectedRoute path="/auth/user/:userId/matches" component={MatchContainer}/>
        <ProtectedRoute path="/auth/user/chatroom/:chatRoomId" component={UserChatDashboard}/>
        <ProtectedRoute exact path="/auth/user/settings" component={UserSettings}/>

        <ProtectedRoute path="/auth/therapist/:therapistId/dashboard" component={TherapistDashboardContainer}/>
        <ProtectedRoute path="/auth/therapist/chatroom/:chatRoomId" component={TherapistChatDashboard}/>
        <ProtectedRoute path="/auth/therapist/note/:noteId" component={NoteFormContainer}/>
        <ProtectedRoute exact path="/auth/therapist/note/new" component={NewNoteFormContainer}/>
        <ProtectedRoute exact path="/auth/therapist/settings" component={TherapistSettings}/>

    </Switch>        
    </>

);

export default App; 