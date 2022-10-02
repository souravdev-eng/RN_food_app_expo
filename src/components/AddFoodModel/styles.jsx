import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 340,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 12,
    alignSelf: 'center',
    width: '100%',
    // elevation: 9,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    marginTop: 4,
    color: '#333',
  },
  label: {
    marginTop: 10,
    fontWeight: '500',
    color: '#444',
  },
  textInput: {
    width: '96%',
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 8,
    borderColor: '#555',
    paddingHorizontal: 12,
    color: '#333',
  },
  bottomButton: {
    width: '96%',
    height: 50,
  },
});

export default styles;
