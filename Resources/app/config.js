tt.config = {}

//configの上手な使い方。

(function(){
	tt.config = {
		//このように色を設定しておく事でアプリ内の切り替えを一括管理。
		backgroundColor:'#FFF',
		barColor:'#000',
		
		loglevel:'debug',
		
		//ベースURLを変えてアクセスするサーバーや開発環境を変える。
		baseUrl:'http://facebook.graph~~~~',
		// baseUrl:'http://localhost/facebook/~~~~~',
		// baseUrl:'http://techgarage.jp/deploy/~~~~~~',
		
	}
});
