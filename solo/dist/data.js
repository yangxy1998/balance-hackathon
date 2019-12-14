function JSONexecute(url,execute) {
    $.ajax({
        //请求方式
        type:"GET",
        //文件位置
        url:url,
        //返回数据格式为json,也可以是其他格式如
        dataType: "json",
        //请求成功后要执行的函数，拼接html
        success:execute
    });
}