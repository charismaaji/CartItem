import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CardItemCart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperImageCheck}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.iconPlus}>V</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/3586249/pexels-photo-3586249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          style={styles.productImage}
        />
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <View>
          <Text>iPhone 6 128gb Silver</Text>
          <Text>$ 300</Text>
        </View>
        <View style={styles.wrapperCardBottom}>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontWeight: '600'}}>-</Text>
          </TouchableOpacity>
          <Text style={{paddingHorizontal: 12}}>3</Text>
          <TouchableOpacity style={[styles.button, {borderColor: 'green'}]}>
            <Text style={styles.iconPlus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CardItemCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  wrapperImageCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
  button: {
    borderWidth: 0.5,
    borderRadius: 4,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPlus: {
    color: 'green',
    fontWeight: '600',
  },
  wrapperCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
