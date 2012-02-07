tt.ui.configw = {};

(function(){
	
	var configw = {};
	
	configw.createWindow = function(){
		var w = Ti.UI.createWindow({
			backgroundColor:'#FFF',
			title:'config'
		});
		
		return w;
	}
	
	
	tt.ui.configw.createTab = function(){
		var tab = Ti.UI.createTab({
			title:'config'
		});
		
		tab.window = configw.createWindow();
		
		return tab;
	}
})();
