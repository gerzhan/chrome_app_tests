/**
 * Created by Nikolay Gerzhan <nikolay.gerzhan@gmail.com>
 *
 */
chrome.app.runtime.onLaunched.addListener(
  function(){
    chrome.app.window.create('index.html',{
        id: 'main',
        'bounds': {
            'width':300,
            'height':500,
            'top':10,
            'left':10
        },
        minHeight:100,
        minWidth:200
    })
  }

);
