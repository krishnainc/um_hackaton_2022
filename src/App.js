import "./App.css";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import ChatBot from 'react-simple-chatbot';


import homeupt from "./component/homeupt";
import About from "./component/About";
import ContactUs from "./component/Contact";
import comingsoon from "./component/comingsoon";
import login from "./component/login"
import KommunicateChat from "./component/chat";

import {MainLayout} from "./layout";
import {CandleStickChart} from "./component/charts/candleStick";
import {IndicatorPage} from "./pages/indicator";
import {Forecast90Page} from "./pages/dashboard";
import Dashboard from "./component/dashboard";
import {LoginPage} from "./pages/login/login";
import {LandingPage} from "./pages/landing";
import {SignupPage} from "./pages/signup/signup";

// const Dash = () => {
// 	return (
// 		<MainLayout>
// 			<CandleStickChart data={data}/>
// 		</MainLayout>
// 	)
// }

const Tradingview = () => {
	return (
		<MainLayout>
			<Dashboard/>
		</MainLayout>
	)
}



function lex() {
	return (
		<div>
			<KommunicateChat/>
		</div>
	);
}


function App() {
	return (
		<>

			<Router>
				<Switch>

					<Route exact path="/" component={LandingPage}/>

					<Route exact path="/about" component={About}/>

					<Route exact path="/contactus" component={ContactUs}/>

					<Route exact path="/mainpage" component={Forecast90Page}/>

					<Route exact path="/indicator" component={IndicatorPage}/>

					<Route exact path="/trading" component={Tradingview}/>

					<Route exact path="/chatbot" component={lex}/>

					<Route exact path="/comingsoon" component={comingsoon}/>

					<Route exact path="/login" component={LoginPage}/>

					<Route exact path="/signup" component={SignupPage}/>

					<Redirect to="/"/>

				</Switch>
			</Router>
		</>
	);
}

export default App;



