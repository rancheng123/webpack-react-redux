'use strict'

/*path start*/
var path = require('path');
var current_path = path.resolve(__dirname);
var src_path = path.resolve(current_path, '../frontEnd/src');
var dist_path = path.resolve(current_path, '../frontEnd/dist');
/*path end*/

const gulp = require('gulp');
const moment = require('moment');

//测试数据
var data_test = src_path + '/data/**/**.json';
gulp.watch(data_test, function(){
    //复制数据
    copyData()
});
//复制数据
copyData();


//复制数据
function copyData(){
    webpackLog('复制数据 开始')

    gulp.src( data_test )
        .pipe(gulp.dest( dist_path + '/data/'));

    webpackLog('复制数据 完成')
}

function webpackLog(msg){
    console.log('--------  '+ msg +'  '+ moment(new Date()).format('HH:mm:ss') +' ----------');
}







