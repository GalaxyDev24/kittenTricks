import React from 'react';
import {
  View,
  StatusBar,
  ViewProps,
  Platform,
  StatusBarStyle,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

interface ComponentProps {
  currentTheme: 'light' | 'dark';
}

export type DynamicStatusBarProps = ThemedComponentProps & ViewProps & ComponentProps;

class DynamicStatusBarComponent extends React.Component<DynamicStatusBarProps> {

  private getStatusBarContent = (): StatusBarStyle => {
    if (this.props.currentTheme === 'light') {
      return 'dark-content';
    } else {
      return 'light-content';
    }
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    const androidStatusBarBgColor: string = themedStyle.container.backgroundColor;
    const barStyle: StatusBarStyle = this.getStatusBarContent();

    return (
      <View style={themedStyle.container}>
        <StatusBar
          backgroundColor={androidStatusBarBgColor}
          barStyle={barStyle}
        />
      </View>
    );
  }
}

export const DynamicStatusBar = withStyles(DynamicStatusBarComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-color-default-1'],
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
}));
