/**
 * Created by Nikolay Gerzhan <nikolay.gerzhan@gmail.com>
 *
 */
chrome.app.runtime.onLaunched.addListener(
  function(){
    chrome.app.window.create('index.html',{
        'bounds': {
            'width':300,
            'height':500//,
            //'top':100,
            //'left':100
        },
        minHeight:100,
        minWidth:200
    })
  }

);
