
	window.fetch

		1. 请求
			1.//创建请求对象
				var req = new Request(URL, {
					method: 'GET', 
					//不缓存响应的结果
					cache: 'reload'
				});  
				fetch(req).then(function(response) {  
				    return response.json();  
				}).then(function(json) {  
				    insertPhotos(json);  
				});


			2.// 修改请求对象 （修改了method属性）
				var newReq = new Request(req, {method: 'POST'}); 


			3. //配置请求头 和 查看相应头
				var headers = new Headers();  
				headers.append('Accept', 'application/json');  
				var request = new Request(URL, {headers: headers});  
				  
				fetch(request).then(function(response) {  
					//（相应头只读）
				    console.log(response.headers);  
				});  	 


