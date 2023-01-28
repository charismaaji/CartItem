import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import CardItemCart from './CardItemCart';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <CardItemCart />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.iconPlus}>V</Text>
          </TouchableOpacity>
          <Text style={[styles.textFooter, {marginRight: 10}]}>
            Total Price
          </Text>
          <Text style={styles.textFooter}>$ 0</Text>
        </View>
        <TouchableOpacity
          style={[styles.buttonCheckout, {backgroundColor: 'orange'}]}>
          <Text style={{color: 'black'}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    flex: 1,
    padding: 15,
  },
  footer: {
    borderTopWidth: 0.5,
    paddingLeft: 15,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textFooter: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonCheckout: {
    backgroundColor: 'orange',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  button: {
    borderWidth: 0.5,
    borderRadius: 4,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  iconPlus: {
    color: 'green',
    fontWeight: '600',
  },
});
