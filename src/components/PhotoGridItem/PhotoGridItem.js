import React from 'react';
import styled from 'styled-components/macro';

const IMAGE_FORMATS = {avif: ['.avif 1x', '@2x.avif 2x', '@3x.avif 3x'], jpeg: ['.jpg 1x', '@2x.jpg 2x', '@3x.jpg 3x']}; 

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type='image/avif' srcSet={IMAGE_FORMATS.avif.map(f => src.replace('.jpg',f)).join(',')} />
          <source type='image/jpeg' srcSet={IMAGE_FORMATS.jpeg.map(f => src.replace('.jpg',f)).join(',')} />
          <Image src={src} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};


const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
