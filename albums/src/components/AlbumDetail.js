import React from 'react';
import { Text, Image } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
  const { title, artist, image } = props.album;
  return (
    <Card>
      <Text>{title}</Text>
      <Text>{artist}</Text>
      <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />
    </Card>
  );
};

export default AlbumDetail;
