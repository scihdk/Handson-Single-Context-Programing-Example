tt.ui.feedtw = {};

(function(){
	
	var feedtw = {};
	var id = '';
	var access_token = '';
	
	//feedの場合は
	//https://graph.facebook.com/me/feed
	//にアクセスする。
	var url = 'https://graph.facebook.com/me/feed?access_token=' + access_token;

	var nav = null;
	
	feedtw.createWindow = function(){
		var w = Ti.UI.createWindow({
			backgroundColor:'#000',
			title:'feed'
		});
		
		var v = Ti.UI.createView({
			backgroundColor:'#FFF'
		});
		w.add(v);
		
		var ref = Ti.UI.createButton({
			// Ti.UI.iPhone.SystemButtonは予め用意されているボタン。
			systemButton : Ti.UI.iPhone.SystemButton.REFRESH
		});
		
		//ナビゲーションバーにボタンをセット
		w.setRightNavButton(ref);
		ref.addEventListener('click',function(){
			
			var config = {
				callback : function(res){
					var data = res.response.data;
					data.forEach(function(d){
			            if(d.story){
			                 var row = Ti.UI.createTableViewRow({
			                    height:50,width:'auto',
			                    title:d.story,
			                    d:d
			                })
			 
			                row.addEventListener('click',function(){
			                    var w = feedtw.createStoryWindow(row.d);
			                    nav.open(w,{animated:true});
			                });
			 
			                rows.push(row);
			            }
			 
			            if(d.message){
			                var row = Ti.UI.createTableViewRow({
			                    height:50,width:'auto',
			                    title:d.message,
			                    d:d
			                })
			 
			                row.addEventListener('click',function(){
			                    var w = feedtw.createMessageWindow(row.d);
			                    nav.open(w,{animated:true});
			                });
			 
			                rows.push(row);
			            }
			        });
			        tv.setData(rows);
			        url = res.response.paging.next + '&access_token=' + access_token;		
				}
			};
			
			tt.model.request(url,"GET",config);
		});
		
		var tv = Ti.UI.createTableView();
		v.add(tv);
		
		var data = [];
		var rows = [];
		data.forEach(function(d){
			var row = Ti.UI.createTableViewRow({
				title:d
			});
			rows.push(row);
		});
		
		tv.setData(rows);
		
		
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
	
	feedtw.createMessageWindow = function(d){
		var w = Ti.UI.createWindow({
	        title:d.message,
	        backgroundColor:'#FFF'
	    });
	 
	    var label = Ti.UI.createLabel({
	        text:d.message,
	        color:'#000',
	        top:10,
	        left:10,
	        height:40,
	        width:'auto'
	    });
	 
	    w.add(label);
	 
	 
	    return w;
	}
	
	feedtw.createStoryWindow = function(d){
		var w = Ti.UI.createWindow({
	        title:d.story,
	        backgroundColor:'#FFF'
	    });
	 
	     var label = Ti.UI.createLabel({
	        text:d.story,
	        color:'#000',
	        top:10,
	        left:10,
	        height:40,
	        width:'auto'
	    });
	 
	    w.add(label);
	    return w;
	}
	
	
	tt.ui.feedtw.createTab = function(){
		var tab = Ti.UI.createTab({
			title:'feed'
		});
		
		tab.window = feedtw.createWindow();
		
		return tab;
	}
})();
