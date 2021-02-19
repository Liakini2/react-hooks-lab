import {Switch, Route} from 'react-router-dom'
import PokemonList from './components/PokemonList'
import PokemonInfo from './components/PokemonInfo'

export default (
    <Switch>
        <Route exact path='/' component={PokemonList}/>
        <Route path='/pokemon/:name' component={PokemonInfo}/>
    </Switch>
)