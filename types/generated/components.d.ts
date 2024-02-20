import type { Schema, Attribute } from '@strapi/strapi';

export interface InformationActers extends Schema.Component {
  collectionName: 'components_information_acters';
  info: {
    displayName: 'Acters';
  };
  attributes: {
    character: Attribute.String & Attribute.Required;
    acter: Attribute.String & Attribute.Required;
  };
}

export interface InformationCategory extends Schema.Component {
  collectionName: 'components_information_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    category: Attribute.Enumeration<
      [
        '\u0412 \u0442\u0440\u0435\u043D\u0434\u0435',
        '\u041D\u043E\u0432\u044B\u0435',
        '\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435'
      ]
    > &
      Attribute.Required;
  };
}

export interface InformationRating extends Schema.Component {
  collectionName: 'components_information_ratings';
  info: {
    displayName: 'Rating';
    description: '';
  };
  attributes: {
    platform: Attribute.Enumeration<
      [
        '\u041A\u0438\u043D\u043E\u043F\u043E\u0438\u0441\u043A',
        'MyShows.me',
        'IMDb'
      ]
    > &
      Attribute.Required;
    rating: Attribute.String & Attribute.Required;
    of: Attribute.String & Attribute.Required;
  };
}

export interface MediaVideo extends Schema.Component {
  collectionName: 'components_media_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    series: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'information.acters': InformationActers;
      'information.category': InformationCategory;
      'information.rating': InformationRating;
      'media.video': MediaVideo;
    }
  }
}
