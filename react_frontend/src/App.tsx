import { FC } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import { Main } from './pages/Main/Main';



const App: FC = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Router>
				<div className="App">
					<GlobalStyle />
					<Switch>
						<Route path="/" component={Main} exact />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
