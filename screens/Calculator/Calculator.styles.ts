import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-between',
  },
  top: {
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    flexBasis: '30%',
    flexGrow: 0,
    flexShrink: 0,
  },
  field: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 'bold',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  button: {
    flexBasis: '50%',
    flexGrow: 0,
    flexShrink: 0,
    textAlign: 'center',
  },
});
