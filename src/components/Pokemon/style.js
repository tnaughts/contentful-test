import {fonts} from '../../styles/text'
export const style = {
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...fonts.styles.h2Bold
  },
  pokemonText: {
    ...fonts.styles.bodyBold
  },
  image: {
    height: 300,
    width: 300
  }

}
