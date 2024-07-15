import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    minWidth: 390,
    height: '100%',
  },
  header: {
    marginTop: 0,
    height: 270,
    width: "100%",
  },
  backgroundImage: {
    width: '100%',
    height: '105%',
    resizeMode: 'cover',
  },
  settingsIconContainer: {
    position: 'absolute',
    top: 280,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 8,
    zIndex: 99,
  },

  whiteBox: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 1,
  },

  content: {
    flex: 1,
    padding: 10,
    marginTop: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    maxWidth: 170,
    height: 196,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardChevronRight: {
    fontSize: 22,
    color: '#00bcd4',
  },
  cardIcon: {
    width: "100%",
    alignItems: 'flex-end',
  },
  cardImage: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  addButton: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignSelf: 'center',
    marginTop: 16,
  },
});

