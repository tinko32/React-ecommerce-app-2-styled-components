import React from 'react'
import CollectionItem from '../collection-item/colection-item';
import { CollectionPreview, TitleContainer, PreviewContainer } from './preview-collection-styles';
const PreviewCollection = ({title, items}) => (
    <CollectionPreview>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {
                items
                .filter((item, idx)=> idx < 4)
                .map((item) =>(
                    <CollectionItem key={item.id} item={item} />
                ))
            }

        </PreviewContainer>

    </CollectionPreview>
)

export default PreviewCollection;