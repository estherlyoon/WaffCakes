import React, { Component } from 'react';
import Level from './Level.js';
export default function BossLevel({navigation}) {
  return <Level type="multiplication" navigation={navigation} />;
}