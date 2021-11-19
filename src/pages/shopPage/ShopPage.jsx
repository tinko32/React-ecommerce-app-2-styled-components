import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import '../../components/preview-collection/preview-colection';

import { CollectionPreviewContainer } from './shop-page-styles'

import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collectionPage-comp';
const ShopPage = ({ match }) => (
  <CollectionPreviewContainer>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </CollectionPreviewContainer>
);

export default ShopPage;