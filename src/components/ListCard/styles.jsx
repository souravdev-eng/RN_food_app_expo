import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingVertical: 12,
    marginVertical: 12,
    borderRadius: 6,
    borderWidth: 0.5,
    borderBottomColor: '#888',
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  drag: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '72%',
  },
  middleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    fontWeight: '600',
    color: '#333',
    marginLeft: 6,
    marginRight: 16,
  },
  price: {
    color: '#333',
    opacity: 0.6,
  },
  divider: { borderRightWidth: 1, height: 30, width: 20, marginRight: 10 },
});

export default styles;
