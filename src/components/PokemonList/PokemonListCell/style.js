import {fonts} from '../../../styles/text'

export const style = {
  cell: {
    flex: .5,
    height: 300,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  pokemonTitle: {
    ...fonts.styles.h3Bold,
    color: 'white'
  },
  pokemonText: {
    color: 'white'
  },
  pokemonImage: {
    width: '100%', 
    height: '100%',
    padding: 5,
  },
  pokemonBio: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    
  }
}