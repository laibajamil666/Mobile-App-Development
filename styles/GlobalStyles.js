import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#2c3e50',
  secondary: '#3498db',
  accent: '#e74c3c',
  success: '#27ae60',
  warning: '#e67e22',
  danger: '#e74c3c',
  background: '#f8f9fa',
  textDark: '#2c3e50',
  textGray: '#7f8c8d',
  textLight: 'white',
  purple: {
    light: '#f4ecf7',
    primary: '#8e44ad',
    secondary: '#9b59b6',
  },
  orange: {
    light: '#fff9e6',
    primary: '#e67e22',
    secondary: '#d35400',
  },
  sale: {
    background: '#ffeaa7',
    header: '#e17055',
  }
};

export const Typography = {
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  subheading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  body: {
    fontSize: 16,
    color: Colors.textGray,
  },
  caption: {
    fontSize: 14,
    color: Colors.textGray,
  }
};

export const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
};

export const GlobalStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  containerPurple: {
    flex: 1,
    backgroundColor: Colors.purple.light,
  },
  containerOrange: {
    flex: 1,
    backgroundColor: Colors.orange.light,
  },
  containerSale: {
    flex: 1,
    backgroundColor: Colors.sale.background,
  },

  // ScrollView styles
  scrollView: {
    flex: 1,
  },

  // Header styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.medium,
    paddingVertical: Spacing.medium,
    elevation: 5,
  },
  headerTitle: {
    color: Colors.textLight,
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  headerIcon: {
    padding: 5,
  },
  headerPlaceholder: {
    width: 24,
  },

  // Card styles
  card: {
    backgroundColor: Colors.textLight,
    borderRadius: 15,
    marginVertical: Spacing.small,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  categoryCard: {
    marginVertical: 8,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  // Button styles
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  primaryButton: {
    backgroundColor: Colors.secondary,
  },
  accentButton: {
    backgroundColor: Colors.accent,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textLight,
  },

  // Text styles
  textCenter: {
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: Colors.textDark,
  },
  emptyCartText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textDark,
    marginBottom: 10,
  },

  // Layout styles
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginTop: 100,
  },
  categoriesContainer: {
    padding: 15,
  },
  productsContainer: {
    padding: 15,
  },

  // Image styles
  categoryImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 15,
  },

  // Overlay styles
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  textOverlay: {
    backgroundColor: 'rgba(44, 62, 80, 0.8)',
    padding: 15,
  },
  purpleOverlay: {
    backgroundColor: 'rgba(142, 68, 173, 0.5)',
    paddingVertical: 8,
    alignItems: 'center',
  },

  // Badge styles
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: Colors.danger,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
});