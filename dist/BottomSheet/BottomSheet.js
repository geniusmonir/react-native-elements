import React from 'react';
import { Modal, View, StyleSheet, Pressable, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
/** Overlay Modal that displays content from the bottom of the screen.
 * This opens from the bottom of the screen.
 * **Note:**
 * Make sure that you have completed [Step 3](getting_started.md#step-3-setup-react-native-safe-area-context) in the setup guide before using `BottomSheet`.
 */
export const BottomSheet = ({ containerStyle, backdropStyle, onBackdropPress = () => null, isVisible = false, modalProps = {}, children, scrollViewProps = {}, ...rest }) => {
    return (<Modal animationType="slide" onRequestClose={onBackdropPress} transparent={true} visible={isVisible} {...modalProps}>
      <Pressable onPress={onBackdropPress} style={[StyleSheet.absoluteFill, backdropStyle]} testID="RNE__Overlay__backdrop"/>

      <SafeAreaView style={StyleSheet.flatten([
            styles.safeAreaView,
            containerStyle && containerStyle,
        ])} pointerEvents="box-none" {...rest}>
        <View>
          <ScrollView {...scrollViewProps}>{children}</ScrollView>
        </View>
      </SafeAreaView>
    </Modal>);
};
const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        flexDirection: 'column-reverse',
    },
});
BottomSheet.displayName = 'BottomSheet';
