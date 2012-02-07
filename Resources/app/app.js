var tt = {};

(function(){
	tt.app = {};
	
})();

//アプリに必要となるソースをここで一括読み込み。主に、model,config,uiをここで読み込む。

Ti.include(
	'/app/ui/ui.js',
	'/app/model/model.js'
);
