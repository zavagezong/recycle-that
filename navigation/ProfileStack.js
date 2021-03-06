import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { AuthContext } from '../contexts/AuthContext';

const LogoTitle = () => {
  return (
    <Image source={require('../assets/images/logo.png')} />
  );
}

const ProfileStack = createStackNavigator();

const ProfileScreenStack = ({ navigation, route }) => {
  const { isSignedIn } = useContext(AuthContext);

  const navProps = isSignedIn
    ? null
    : {
      mode: 'modal',
      headerMode: 'none',
    }

  return (
    <ProfileStack.Navigator initialRouteName={isSignedIn ? 'Profile' : 'Login'} {...navProps} >
      {isSignedIn ? (
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
      ) : (
          <>
            <ProfileStack.Screen name="Sign Up" component={SignUpScreen} />
            <ProfileStack.Screen name="Login" component={LoginScreen} />
          </>
        )
      }
    </ProfileStack.Navigator>
  );
};

export default ProfileScreenStack;
