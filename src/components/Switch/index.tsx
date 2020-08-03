import React, { useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';

import { SwitchProps } from './types';

const Switch = (props: SwitchProps) => {
  const {
    size,
    isOn,
    onColor,
    offColor,
    disabled,
    onToggle,
    trackOffStyle,
    trackOnStyle,
    thumbOnStyle,
    thumbOffStyle,
    icon,
  } = props;
  const offsetX = useRef(new Animated.Value(0)).current;
  const dimensions = calculateDimensions(size || '');
  const toValue = isOn ? dimensions.width - dimensions.translateX : 0;
  Animated.timing(offsetX, {
    toValue,
    duration: 300,
    useNativeDriver: true,
  }).start();

  const createToggleSwitchStyle = () => {
    return {
      justifyContent: 'center',
      width: dimensions.width,
      borderRadius: 20,
      padding: dimensions.padding,
      backgroundColor: isOn ? onColor : offColor,
      ...(isOn ? trackOnStyle : trackOffStyle),
    };
  };

  const createInsideCircleStyle = () => {
    return {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 4,
      position: 'absolute',
      backgroundColor: 'white',
      transform: [{ translateX: offsetX }],
      width: dimensions.circleWidth,
      height: dimensions.circleHeight,
      borderRadius: dimensions.circleWidth / 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2.5,
      elevation: 1.5,
      ...(isOn ? thumbOnStyle : thumbOffStyle),
    };
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={createToggleSwitchStyle()}
        activeOpacity={0.8}
        onPress={() => (disabled ? null : onToggle())}
      >
        <Animated.View style={createInsideCircleStyle()}>{icon}</Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const calculateDimensions = (size: string) => {
  switch (size) {
    case 'small':
      return {
        width: 40,
        padding: 10,
        circleWidth: 15,
        circleHeight: 15,
        translateX: 22,
      };
    case 'large':
      return {
        width: 70,
        padding: 20,
        circleWidth: 30,
        circleHeight: 30,
        translateX: 38,
      };
    default:
      return {
        width: 46,
        padding: 12,
        circleWidth: 18,
        circleHeight: 18,
        translateX: 26,
      };
  }
};

Switch.defaultProps = {
  isOn: false,
  onColor: '#4cd137',
  offColor: '#ecf0f1',
  size: 'medium',
  labelStyle: {},
  thumbOnStyle: {},
  thumbOffStyle: {},
  trackOnStyle: {},
  trackOffStyle: {},
  icon: null,
  disabled: false,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: { marginHorizontal: 10 },
});

export default Switch;
