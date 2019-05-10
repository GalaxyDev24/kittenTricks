import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Tab,
  TabView,
  TabViewChildProps,
  TabViewProps,
} from '@kitten/ui';
import {
  GridIcon,
  ListIconFill,
} from '@src/assets/icons';
import { LayoutGridList } from '../layoutGridList';
import { LayoutList } from '../layoutList';
import { LayoutMenuItemData } from './type';

// @ts-ignore (override `children` prop)
interface ComponentProps extends TabViewProps {
  data: LayoutMenuItemData[];
  onItemPress: (index: number) => void;
  children?: ChildrenProp;
}

export type LayoutMenuProps = ThemedComponentProps & ComponentProps;

type ChildElement = React.ReactElement<TabViewChildProps>;
type ChildrenProp = ChildElement | ChildElement[];

class LayoutMenuComponent extends React.Component<LayoutMenuProps> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, data, ...restProps } = this.props;

    return (
      <TabView {...restProps}>
        <Tab icon={GridIcon}>
          <LayoutGridList
            style={themedStyle.listContainer}
            contentContainerStyle={themedStyle.listContentContainer}
            data={data}
            onItemPress={this.onItemPress}
          />
        </Tab>
        <Tab icon={ListIconFill}>
          <LayoutList
            style={themedStyle.listContainer}
            contentContainerStyle={themedStyle.listContentContainer}
            data={data}
            onItemPress={this.onItemPress}
          />
        </Tab>
      </TabView>
    );
  }
}

export const LayoutMenu = withStyles(LayoutMenuComponent, (theme: ThemeType) => ({
  listContainer: {
    flex: 1,
    backgroundColor: theme['color-basic-100'],
  },
  listContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
}));
