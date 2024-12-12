import React, {useState} from "react";
import { View, Text, Image, SafeAreaView, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./styles";
import Searchbar from "./search";
import { Ionicons } from '@expo/vector-icons';
export default function Home({navigation}) {
 const [imageSize, setImageSize] = useState(200);

 {/*Array of image links*/}
  const imageArray = [
    'https://th.bing.com/th/id/OIP.Xc2UiXCI3LcLE0tY64Oj_AHaDt?w=315&h=175&c=7&r=0&o=5&dpr=1.2&pid=1.7',
     'https://th.bing.com/th/id/R.17230eb32e5978baee96bef9df901c4f?rik=WpYM8OWv7nvJdg&pid=ImgRaw&r=0',
      'https://th.bing.com/th/id/OIP.LzGKW0JU9NjQCiosZXF7owHaEo?w=283&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7'];

  {/*Array of the page names associates with the image links*/}
  const pageArray = ["Planets", "Films", "Spaceships"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const LazyImage = ({ source, style }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={[style, styles.lazyImageContainer]}>
      {loading && (
        <ActivityIndicator size="large" color="#6200ea" style={styles.loader} />
      )}
      <Image
        source={source}
        style={style}
        onLoad={() => setLoading(false)}
        resizeMode="contain"
      />
      {/*When pressed triggers the function which shows the next item in the array*/}
        <Ionicons style={styles.backArrow} onPress={handleNext} name="arrow-back-circle-outline" size={50} color="white" />
        {/*When pressed triggers the function which shows the previous item in the array*/}
        <Ionicons style={styles.forwardArrow} onPress={handlePrevious} name="arrow-forward-circle-outline" size={50} color="white" />
    </View>
  );
};

  const renderImage = () => {
  const image = imageArray[currentIndex];
  const page = pageArray[currentIndex];
  {/*Loops the array once the end is reached */}
    if (currentIndex < 0) {
      setCurrentIndex( imageArray.length -1);
    }
    
    return(
      <SafeAreaView>
      {/*When clicked takes the user to the page associated with the current slideshow index*/}
      <TouchableOpacity  onPress={() => navigation.navigate(`${page}`)}>
      {/*Shows the image for the slideshow*/}
         <LazyImage
          source={{
            uri: `${image}`,
          }}    
          style={{
            width: 370,
            height: imageSize,
            borderRadius: 10,
          }}
        />
        {/*Shows the page name for the slideshow*/}
        <Text style={styles.slideshowText}>{page}</Text>
    </TouchableOpacity>
        </SafeAreaView>

    );
  };

{/*When triggered increases the current index by 1 to show the next item in the array */}
  const handleNext = () => {
    setCurrentIndex( (currentIndex + 1) % imageArray.length);
  };
{/*When triggered decreases the current index by 1 to show the previous item in the array */}
  const handlePrevious = () => {
    setCurrentIndex ( (currentIndex -1 + imageArray.length) % imageArray.length);
  };
   const [searchbarVisible, setSearchbarVisible] = useState(false);

  return (
    <SafeAreaView style={styles.homeContainer}  >
    <Text style={styles.homeHeader}>StarWars</Text>

      {/*When clicked toggles search bar visibility*/}
      <TouchableOpacity style={styles.homeSearchIcon} onPress={() => setSearchbarVisible(!searchbarVisible)}>
         <Ionicons name="search" size={25} color="black" />
      </TouchableOpacity>

      {/*Shows the search bar*/}
       {searchbarVisible && (
      <Searchbar> </Searchbar>
       )}
    <Text style={styles.homeText}>Welcome to the unnoficial app for StarWars information! </Text>
    {/*Triggers function to show the image */}
    {renderImage()}
    
  </SafeAreaView>
  );
}
