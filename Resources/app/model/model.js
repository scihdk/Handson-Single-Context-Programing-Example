tt.model = {};

//モデルに通信系の処理を置いておく。

(function(){
	
	tt.model.request = function(url,method,config){
		method = method || {};
		method = method.toUpperCase();
		
		var params = config.params || {};
		// alert(params.access_token);
		if(!Ti.Network.online){
			alert('オフラインです。');
			return;
		}
		try{
			var xhr = Ti.Network.createHTTPClient({
			     // function called when the response data is available
			     onload : function(e) {
			         Ti.API.info("Received text: " + this.responseText);
			         var res = JSON.parse(this.responseText);
			         
			        //コールバック関数に値を返す。
			         config.callback({response:res});
			     },
			     // function called when an error occurs, including a timeout
			     onerror : function(e) {
			         Ti.API.info(e.error);
			         alert('error');
			     },
			     timeout : 5000  /* in milliseconds */
			 });
			//コネクション
			xhr.open("GET",url,false);
			
			if(params == {}){
				xhr.send();
			}else{
				xhr.send(params);
			}
		}
		catch(error){
			Ti.API.info(error);
		}
	}
	
})();
