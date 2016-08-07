var React = require('react');
var ReactDOM = require('react-dom');
var Console = require('./console.jsx');
var Dashboard = require('./dashboard.jsx');

var MainRender = React.createClass({
getInitialState: function(){
return {activatenote: false}    
},    
    
mainpage: function(){
return (<div id="mainrender" className="row">
<Console/>
<Dashboard/>
</div>);
},

render:function(){
return this.mainpage();}        
});

ReactDOM.render(<MainRender />, document.getElementById('mainsection'));