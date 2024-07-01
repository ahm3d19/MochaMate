import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../Constants/colors';

const CoffeeCategories = [
  {id: 1, coffeeCategory: 'Coffee'},
  {id: 2, coffeeCategory: 'Cappuccino'},
  {id: 3, coffeeCategory: 'Expresso'},
  {id: 4, coffeeCategory: 'Americano'},
  {id: 5, coffeeCategory: 'Latte'},
  {id: 6, coffeeCategory: 'Macchiato'},
];

const Home = () => {
  return (
    <View style={styles.container}>

      {/* TopView Section */}
      <View style={styles.TopView}>
        {/* DP */}
        <TouchableOpacity>
          <Image
            style={styles.dpStyle}
            source={{
              uri: 'https://miro.medium.com/v2/resize:fit:560/0*Er3EvgmHct_t9Q-m.',
            }}
          />
        </TouchableOpacity>

        {/* Location  */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.locationIconImg}
            source={require('../../Assets/Icons/location.png')}
          />
          <Text style={{fontSize: hp(2), paddingLeft: 5}}>Jakarta, US</Text>
        </TouchableOpacity>

        {/* Bell Icon */}
        <TouchableOpacity>
          <Image
            style={styles.bellIcon}
            source={require('../../Assets/Icons/bell.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Greeting Section*/}
      <View>
        <Text
          style={{
            fontSize: hp(2.5),
            paddingVertical: hp(2.5),
            fontWeight: '600',
          }}>
          Good morning, Adam
        </Text>
      </View>

      {/* SearchBar Section */}
      <View style={styles.searchSection}>
        <Image source={require('../../Assets/Icons/search.png')} />
        <TextInput
          style={{fontWeight: '800'}}
          placeholder="Search Coffee ..."
          placeholderTextColor={'#80A896'}
          selectionColor={'#80A896'}
        />
        <Image source={require('../../Assets/Icons/filter.png')} />
      </View>

      {/* Categories Section */}
      <View>
        <Text
          style={{
            fontSize: hp(2.5),
            paddingVertical: hp(2.5),
            fontWeight: '600',
          }}>
          Categories
        </Text>

        {/* Categories List */}
        <FlatList
          data={CoffeeCategories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={{padding: 10}}>
                <TouchableOpacity style={styles.categoryBtn}>
                  <Image
                    style={{height: 18, width: 18}}
                    source={require('../../Assets/Icons/coffee.png')}
                  />
                  <Text
                    style={{
                      color: '#00582F',
                      fontWeight: '500',
                      fontSize: 13,
                      paddingLeft: 10,
                    }}>
                    {item.coffeeCategory}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 20,
  },

  TopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(6),
  },
  dpStyle: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  locationIconImg: {
    height: 12,
    width: 12,
  },
  bellIcon: {
    height: 30,
    width: 30,
  },

  searchSection: {
    flexDirection: 'row',
    height: 50,
    width: 350,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 30,
  },

  categoryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    height: hp(5),
    width: wp(35),
    backgroundColor: '#fff',
    borderRadius: 30,
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {height: 0, width: 0},
  },
});
