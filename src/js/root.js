import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import 'antd/dist/antd.css';
import PcIndex from './components/pcIndex';
import MediaQuery from 'react-responsive';
import MobileIndex from './components/mobileIndex';
import PcDetails from './components/pcDetail';
import MobileDetails from './components/mobileDetail';
import PcUserCenter from './components/pcUserCenter';
import MobileUserCenter from './components/mobileUserCenter';

export default class Root extends React.Component{
    render(){
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                  <Router history={hashHistory}>
                    <Route path="/" component={PcIndex}/>
                    <Route path="/details/:uniquekey" component={PcDetails}/>
                    <Route path="/userCenter" component={PcUserCenter}/>
                  </Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                  <Router history={hashHistory}>
                    <Route path="/" component={MobileIndex}/>
                    <Route path="/details/:uniquekey" component={MobileDetails}/>
                    <Route path="/userCenter" component={MobileUserCenter}/>
                  </Router>
                </MediaQuery>
            </div>
        );
    };
}

ReactDOM.render(<Root/>, document.getElementById('app'));
