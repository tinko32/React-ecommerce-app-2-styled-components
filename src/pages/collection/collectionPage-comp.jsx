
import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/colection-item'
import {selectCollection} from '../../redux/shop-redux/shop.selectors'
import { CollectionPageContainer,ItemsStyle } from './collection-page-styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <h2 className='title'>{title}</h2>
      <ItemsStyle>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsStyle>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);