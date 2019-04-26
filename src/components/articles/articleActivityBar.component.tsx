import React from 'react';
import {
  StyleProp,
  TextStyle,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ActivityBar,
  ActivityBarProps,
  CommentsButton,
  LikeButton,
  ReactionBar,
} from '@src/components/common';

interface ComponentProps {
  comments: React.ReactText;
  likes: React.ReactText;
  onCommentPress: () => void;
  onLikePress: () => void;
  buttonStyle?: StyleProp<TextStyle>;
}

export type ArticleActivityBarProps = ThemedComponentProps & ActivityBarProps & ComponentProps;

class ArticleActivityBarComponent extends React.Component<ArticleActivityBarProps> {

  public render(): React.ReactNode {
    const {
      themedStyle,
      buttonStyle,
      comments,
      likes,
      onCommentPress,
      onLikePress,
      children,
      ...restProps
    } = this.props;

    return (
      <ActivityBar {...restProps}>
        {children}
        <ReactionBar>
          <CommentsButton
            style={buttonStyle}
            onPress={onCommentPress}>
            {comments}
          </CommentsButton>
          <LikeButton
            style={buttonStyle}
            onPress={onLikePress}>
            {likes}
          </LikeButton>
        </ReactionBar>
      </ActivityBar>
    );
  }
}

export const ArticleActivityBar = withStyles(ArticleActivityBarComponent, (theme: ThemeType) => ({
}));
