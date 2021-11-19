import React  from 'react'
import MenuItem from '../menuItemComponent/menu-item';

import { connect } from 'react-redux';

import { DirectoryContainer } from './directory-styles';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);