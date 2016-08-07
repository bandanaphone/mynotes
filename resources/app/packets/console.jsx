var React = require('react');
var datastored = require('./datastored.js');

module.exports = React.createClass({
getInitialState:function(){
return {actname: false, namespace: 'Insert Name', results: []}    
},

actname:function(){
this.setState({actname: true});    
},  
    
runcheck:function(){
let arr = [];
datastored.entries
.each((uploaded)=>arr.push(uploaded))
.then(()=>this.setState({results:arr}));
}, 

checkname:function(){
var yourname = localStorage.getItem('yourname');    
if (yourname)
{this.setState({namespace:yourname});}
else return null;   
},    
    
componentDidMount:function(){
this.checkname();    
},    
    
setit:function(){
this.setState({actname: false});  
var acquiredname = document.getElementById('namechange').value;
localStorage.setItem('yourname', acquiredname);
this.setState({namespace: acquiredname});       
},    
    
yourname:function(){
if (this.state.actname){
return (
<textarea id="namechange" onBlur={this.setit} className="changename" defaultValue={this.state.namespace}></textarea>        
);}

else {return (
<p className="changename" onClick={this.actname}>{this.state.namespace}</p>
);}        
},    

welcomeview: function(){
    return (<div id="welcomeview"><p className="welcome">Welcome to <span id="mynotes">mynotes</span></p><div className="welcome"><span id="propof">Property of:</span>{this.yourname()}</div></div>);    
},

entrysubmissions:function(){
var list = this.state.results.map(result =>{
return (      
<tr id="entrysubmissions" key={result.id}>
<td id="resultid"><p>{result.id}</p></td>
<td>{result.title}</td>
<td>{result.entry}</td>    
</tr>        
);    
});   
return (<div>
<table className="table"><tbody>{list}</tbody></table>
</div>);    
},    
    
consoleview:function(){
return (<div id="consoleview" className="col-md-2 col-xs-3 col-sm-3">
{this.welcomeview()}
{this.entrysubmissions()}
{this.runcheck()}
</div>);    
},    
    
render: function(){
return this.consoleview();    
}    
});