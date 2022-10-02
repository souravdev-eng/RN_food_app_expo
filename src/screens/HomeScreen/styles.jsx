import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 32,
  },
  coverContainer: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
    opacity: 0.2,
    zIndex: 1,
    flex: 1,
    position: 'absolute',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 6,
    right: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    width: '90%',
    marginVertical: 10,
    borderStyle: 'dashed',
  },
});

export default styles;
