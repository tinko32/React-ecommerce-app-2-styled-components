import React from 'react';
import { selectCollectionsForPreview } from '../../redux/shop-redux/shop.selectors';
import {CollectionsOverviewContainer} from './collection-overview-styles'

import { connect } from 'react-redux';
import PreviewCollection from '../preview-collection/preview-colection';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);