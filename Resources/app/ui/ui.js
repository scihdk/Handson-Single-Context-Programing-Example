tt.ui = {};

(function(){
	
	//アプリのウィンドウを生成する。
	tt.ui.createApplicationWindow = function(){
		var tabGroup = Ti.UI.createTabGroup();
		
		tabGroup.addTab(tt.ui.feedtw.createTab());
		tabGroup.addTab(tt.ui.photow.createTab());
		tabGroup.addTab(tt.ui.configw.createTab());
		
		return tabGroup;
	};
	
})();

//uiに関するソースをui.jsで一括読み込み
Ti.include(
	'/app/ui/feedTableWindow.js',
	'/app/ui/configWindow.js',
	'/app/ui/photoWindow.js'
	);
