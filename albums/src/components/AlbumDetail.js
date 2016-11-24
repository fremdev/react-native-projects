import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  const { title, artist, image, thumbnail_image } = props.album;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image source={{ uri: thumbnail_image }} style={styles.thumbnailStyle} />
        </View>
        <View style={styles.albumTextContainer}>
          <Text style={styles.albumHeaderStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={styles.coverStyle} />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  albumTextContainer: {
    justifyContent: 'space-around'
  },
  albumHeaderStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  coverStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;
