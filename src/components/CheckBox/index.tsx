// base and lib imports
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

// types
import { CheckBoxProps } from './types';

// utils and helpers
import { getCheckDmnsn } from '../../common/utils';

// common components
import { Scale } from '../../animated';

// styles and themes
import { useColors } from '../../themes';

const CheckBox = (props: CheckBoxProps) => {
  const { checked, containerStyle, disabled, onPress, size } = props;
  const [height, width, iconSize] = getCheckDmnsn(size!);
  const Colors = useColors();
  const getRequiredColor = () => {
    if (disabled) {
      if (!checked) {
        return [Colors.white, Colors.font_3, Colors.white];
      }
      return [Colors.font_3, Colors.font_3, Colors.white];
    }
    if (!disabled && checked) {
      return [Colors.primary, Colors.transparent, Colors.white];
    }
    return [Colors.white, Colors.primary];
  };
  const [backgroundColor, borderColor, iconColor] = getRequiredColor();
  const mainContainerStyle = {
    ...styles.boxContainer,
    backgroundColor,
    borderColor,
    // giving preference to custom styles
    ...containerStyle,
    height,
    width,
  };
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View style={mainContainerStyle}>
        {/* <Fade visible={checked!} containerStyle={{ flex: 1 }} duration={300}>
          <Icon name="check" size={iconSize} color={iconColor} />
        </Fade> */}
        {checked && (
          <Scale>
            <Icon name="check" size={iconSize} color={iconColor} />
          </Scale>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CheckBox;
