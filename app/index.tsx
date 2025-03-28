import { Redirect } from "expo-router";
import React from "react";


// Checking Store Logics will come over here
// Splash Screens, Animations, Loading of Values etc
export default function Home() {
  return Redirect({href: '/(auth)'})
}
