
const child_process = require('child_process');

    const commadCofig = {
        lib: 'cd front/src/js & webpack lib-bundle.js ../../dist/lib.js'
    }

    var workerProcess = child_process.exec(commadCofig.lib,
        function (error, stdout, stderr) {
            if (error) {
                console.log('error.stack');
                console.log(error.stack);
                console.log('Error code: '+error.code);
                console.log('Signal received: '+error.signal);
            }

            //输出执行结果
            console.log(stdout);
            //输出执行错误
            console.log(stderr);
        });

    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });