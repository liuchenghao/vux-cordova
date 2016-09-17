cordova.define("com.example.CeshiPlugin.UserAccount", function(require, exports, module) {
               var tian=require('cordova/exec');
               module.exports={
               //自定义方法
               getUserInfo:function(getSucc,getFailed,args, args2, args3)
               {
               /*
                第一个参数:回调成功参数
                第二个参数:回调失败参数
                第三个参数:JS要调用OC类的名字参数
                第四个参数:要调用方法的名字
                第五个参数:要传递的参数，以JSON格式
                */
               tian(getSucc,getFailed,"UserAccount","getUserInfo",[args,args2,args3]);
               
               }
            };
});
