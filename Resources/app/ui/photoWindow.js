tt.ui.photow = {};

(function(){
	
	var photow = {};
	var id = '';
	var access_token = '';
	
	//photoの場合は
	//https://graph.facebook.com/me/photos
	//にアクセスする。
	
	var url = 'https://graph.facebook.com/me/photos?access_token='+access_token;
	var nav = null;
	
	var data = [];
	var rows = [];

	
	
	photow.createWindow = function(){
		var w = Ti.UI.createWindow({
			backgroundColor:'#FFF',
			title:'photo'
		});
		
		
		var v = Ti.UI.createView({
			backgroundColor:'#FFF'
		});
		w.add(v);
		
		var ref = Ti.UI.createButton({
			systemButton : Ti.UI.iPhone.SystemButton.REFRESH
		});
		w.setRightNavButton(ref);
		
		//更新ボタンをタップした時に処理を開始する。
		ref.addEventListener('click',function(){
			
			var config = {
				callback : function(res){
					var data = res.response.data;
					
					data.forEach(function(d){
						var imgurl = d.images[2].source;
						
						//テーブルビューの要素を設定する
						var row = Ti.UI.createTableViewRow({
			                   height:150,width:320,
			                   title:d.story,
			                   d:d
			        	});
			             var imgv =Ti.UI.createImageView({image:imgurl}) ;
			            row.add(imgv);
		              	rows.push(row); 
					});
					
					//テーブルビューに写真の並びをセット
					tv.setData(rows);
					url = res.response.paging.next + '&access_token=' + access_token;
				}
			}
			
			tt.model.request(url,"GET",config);
		});
		
		
		
		
		var tv = Ti.UI.createTableView();
		v.add(tv);
		
		//ナビゲーションをセット,ナビゲーションには子ウィンドウを設置
		nav = Ti.UI.iPhone.createNavigationGroup({
		    window:w
		});
		
		//親ウィンドウを設置
		var rootwin = Ti.UI.createWindow({});
		rootwin.hideNavBar();
		//親ウィンドウにナビゲーションを設置
		rootwin.add(nav);
		
		return rootwin;
	}
	
	
	tt.ui.photow.createTab = function(){
		var tab = Ti.UI.createTab({
			title:'photo'
		});
		
		tab.window = photow.createWindow();
		
		return tab;
	}
})();
