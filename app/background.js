/**
 * Created by Nikolay Gerzhan <nikolay.gerzhan@gmail.com>
 *
 */
// событие запуска приложения пользователем
chrome.app.runtime.onLaunched.addListener(
    function () {
        runApp(false);
    }

);
// событие перезапуска приложение
chrome.app.runtime.onRestarted.addListener(
    function () {
        runApp(true); // выполнить запуск с указанием признака восстановления параметров
    }
);

function runApp(_readInitialState) {
    chrome.app.window.create('index.html', {
            id: 'main',
            'bounds': {
                'width': 300,
                'height': 500,
                'top': 10,
                'left': 10
            },
            minHeight: 100,
            minWidth: 200
        },
        // функция обратного вызова получет ссылку на AppWindow объект
        function (win) {
            // при вызове метода, DOM структура страници загужена полностью,
            // но скрипты не загузились окончательно.
            // в связи с этим корректируем событие инициализации
            win.contentWindow.addEventListener('load', function () {
                if (_readInitialState) {
                    win.contentWindow.setInitialState();
                } else {
                    win.contentWindow.clearInitialState();
                }
            });
        });
}

