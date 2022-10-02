import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#03aa4e',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },

  light_text: {
    color: '#333',
    fontSize: 16,
    marginLeft: 18,
  },
  light: {
    width: '90%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#49f69744',
    borderColor: '#03aa4e',
    alignItems: 'center',
    marginVertical: 12,
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
});

export default styles;
