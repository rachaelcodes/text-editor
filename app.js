document.getElementById('heading').innerHTML = localStorage['title'] || 'What are you going to call your writing?';
document.getElementById('content').innerHTML = localStorage['text'] || 'Start here...';

setInterval(function(){
	localStorage['title']=document.getElementById('heading').innerHTML;
	localStorage['text']=document.getElementById('content').innerHTML;
}, 1000);