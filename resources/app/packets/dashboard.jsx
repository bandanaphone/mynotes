var React = require('react');
var Addnote = require('./addnote.jsx');

module.exports = React.createClass({    
    
dashboardview:function(){
return (<div id="dashboardview" className="col-md-10 col-sm-9 col-xs-9">
        <Addnote/>
</div>);    
},    
    
render:function(){
return this.dashboardview();}    
});