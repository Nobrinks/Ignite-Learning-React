import { render } from 'react-dom';
import { App } from './App';

//2 parametros; primeiro param: o que se quer renderizar, o que se quer exibir
//segundo param: dentro de qual elemento quero renderizar a informação
render(<App />, document.getElementById('root'))