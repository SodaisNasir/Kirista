import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import CustomDrawerNavigation from './CustomDrawerNavigation'

const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerNavigation {...props} />}>
      {/* Add your screens here */}
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
