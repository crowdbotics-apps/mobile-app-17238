import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile69711Navigator from '../features/UserProfile69711/navigator';
import Maps69692Navigator from '../features/Maps69692/navigator';
import Settings69670Navigator from '../features/Settings69670/navigator';
import Settings69655Navigator from '../features/Settings69655/navigator';
import NotificationList69654Navigator from '../features/NotificationList69654/navigator';
import Maps69653Navigator from '../features/Maps69653/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile69711: { screen: UserProfile69711Navigator },
Maps69692: { screen: Maps69692Navigator },
Settings69670: { screen: Settings69670Navigator },
Settings69655: { screen: Settings69655Navigator },
NotificationList69654: { screen: NotificationList69654Navigator },
Maps69653: { screen: Maps69653Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
