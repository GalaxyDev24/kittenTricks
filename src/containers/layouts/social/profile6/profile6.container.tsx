import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import {
  CategorisedProfileActivity,
  Profile,
  ProfileSocials,
} from '@src/core/model';
import {
  profile1,
  categorisedProfileActivity1,
  profileSocials1,
} from '@src/core/data/profile';
import { Profile6 } from './profile6.component';

interface State {
  profile: Profile;
  socials: ProfileSocials;
  activity: CategorisedProfileActivity;
}

export class Profile6Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: profile1,
    socials: profileSocials1,
    activity: categorisedProfileActivity1,
  };

  private onFollowPress = () => {

  };

  private onMessagePress = () => {

  };

  private onFollowersPress = () => {

  };

  private onFollowingPress = () => {

  };

  private onPostsPress = () => {

  };

  private onPhotoPress = (index: number) => {
  };

  public render(): React.ReactNode {
    return (
      <Profile6
        profile={this.state.profile}
        socials={this.state.socials}
        activity={this.state.activity}
        onFollowPress={this.onFollowPress}
        onMessagePress={this.onMessagePress}
        onFollowersPress={this.onFollowersPress}
        onFollowingPress={this.onFollowingPress}
        onPostsPress={this.onPostsPress}
        onPhotoPress={this.onPhotoPress}
      />
    );
  }
}
