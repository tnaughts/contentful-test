import {fonts} from '../../styles/text'


export const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  wrongTile: {
    flex: .5,
    height: '300px',
    width: '300px',
    padding: '10px',
    borderWidth: '1px',
    borderColor: 'black',
    color: 'red',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  }
}