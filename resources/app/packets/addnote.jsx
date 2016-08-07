var React = require('react');
var datastored = require('./datastored.js');

module.exports = React.createClass({
getInitialState:function(){
return {addstate: false, notedata: []}    
},    

sendthru:function(){
var newInput = {
title: this.inputTitle.value,
entry: this.inputEntry.value    
}; 
datastored.entries.add(newInput).then(()=>this.runcheck());
this.inputTitle.value = '';
this.inputEntry.value = '';   
},    

runcheck:function(){
let arr = [];
datastored.entries
.each((uploaded)=>arr.push(uploaded))
.then(()=>this.setState({results:arr}));
},    
    
addstate:function(){
this.setState({addstate: true});    
},    
    
addnote: function(){
return (<div id="addanote" className="dochoice" onClick={this.addstate}><p>+ Add A Note</p></div>);    
},    
  
addnotesection:function(){
if (this.state.addstate){
return (<div id="addnotesection">
<p className="addnotetext">Title</p>
<input type="text" className="form-control" ref={el => this.inputTitle = el} />        
<p className="addnotetext">Entry</p>
<textarea className="form-control" ref={el => this.inputEntry = el}></textarea> 
<button id="savebutton" className="btn btn-info" onClick={this.sendthru}>Save It</button>        
</div>);}
else return null;    
},    
    
render:function(){
return (<div>
    {this.addnote()}
    {this.addnotesection()}
</div>);}    
});