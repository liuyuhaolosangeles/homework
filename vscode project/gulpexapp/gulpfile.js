//处理任务
//引入模块 import
var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var scss = require("gulp-sass");
var concat = require("gulp-concat");
/*
gulp.task  -- 定义任务

gulp.src --找到需要执行任务的文件

gulp.dest --执行任务的文件的去处

gulp.watch --观察文件是否变化
*/


// 定义任务

gulp.task("message",function(){
    return console.log("gulp is running")
});

// 执行任务 gulp message

//定义默认任务

// gulp.task("default",function(){
//     return console.log("默认任务 is running")
// });

// 执行多个任务
gulp.task('default',['message','copyHtml','imagemin','scss','scripts'],function(){

});


//拷贝文件到dist文件夹里

gulp.task("copyHtml",function(){
    gulp.src('src/*.html').pipe(gulp.dest("dist"))
});




//图片压缩
gulp.task("imagemin",function(){
    gulp.src('src/images/*').pipe(imagemin())//压缩
    .pipe(gulp.dest('dist/images'))
});




//压缩JS文件

gulp.task("minify",function(){
    gulp.src("src/js/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
})


/// sass转换为CSS

gulp.task("scss",function(){
    gulp.src("src/sass/*.scss").pipe(scss().on("error",scss.logError))
    .pipe(gulp.dest("dist/css"));
})



//代码合并
gulp.task("scripts",function(){
    gulp.src("src/js/*.js")
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
})


//监听文件是否发生变化
gulp.task("watch",function(){
    gulp.watch("src/js/*.js",['scripts']);
gulp.watch("src/images/*",['imagemin']);
gulp.watch("src/sass/*.scss",['scss']);
gulp.watch("src/*.html",['copyHtml']);
})
