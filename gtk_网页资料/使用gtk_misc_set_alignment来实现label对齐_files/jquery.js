(function(a){if(a.ppDialog){return}a.ppDialog=function(e){var h={title:"登录",appId:1019,regRedirectUrl:"",onLogin:null,onAfterLogin:null};var f=a.extend(h,e);var d=false;function b(i,k){if(typeof(i)!="object"){return}var j=new Function();j.prototype=PassportSC;var m=PassportCardList.length;var l=new j();l.appid=k;l.curCardIndex=m;l.isSetFocus=false;PassportCardList[m]=l;c(m,i);return}function c(k,j){if(k==null){return}var i=PassportCardList[k];i.appid=f.appId;i.loginRedirectUrl="";i.autoredirecturl="";i._drawLoginForm=function(){a(this.cElement).html('<form class="login-form" method="post" name="loginform"><div class="error">请输入您的搜狐通行证信息</div><div class="login"><div class="left"><div class="loginFrom"><label class="uname" for="passport-id">登录名<input id="passport-id" type="text" name="email" autocomplete="off" disableautocomplete /></label><label class="upass" for="passport-pwd">密　码<input id="passport-pwd" type="password" name="password" /></label><label class="ucookie" for="passport-cookie"><input id="passport-cookie" type="checkbox" name="persistentcookie" value="1" '+i.defualtRemPwd+' />记住登录状态</label>&nbsp;&nbsp;<a href="'+this.recoverUrl+'" target="_blank">忘记密码？</a></div><div class="btn"><input class="passport-login" type="button" value="登录" /><input type="submit" style="position:absolute;left:-1000px;top:-1000px;" /></div></div><div class="right"><div>没有搜狐通行证？</div><div class="btn"><a href="http://i.sohu.com/login/reg.do'+(f.regRedirectUrl?("?bru="+encodeURIComponent(f.regRedirectUrl)):"")+'" target="_blank"><input type="button" value="现在注册" /></a></div></div></div></form>');a("button, input[type='button']",g).iButton();a("#passport-id",g)[0].focus();a("form",g).submit(function(){d=true;return i.doLogin()})};i.drawPassportWait=function(l){a(this.cElement).html('<div class="login loading"><div class="loadTxt">正在登录，请稍候...</div></div>')};i.drawPassportCard=function(){this.successCalledFunc()};i.successCalledFunc=function(){if(g){g.close()}if(d&&a.isFunction(f.onLogin)){f.onLogin(this.cookie.userid)}if(a.isFunction(f.onAfterLogin)){f.onAfterLogin(this.cookie.userid)}};i.drawPassport(j)}var g=a.dialog({className:"pp-dialog",content:"<h2>"+f.title+'</h2><div class="login-panel"></div>',contentWidth:400,contentHeight:200}).click(function(j){var i=a(j.target);var k=i.closest(".passport-login");if(k.length){a(".login-form",this).submit()}});b(a("div.login-panel",g)[0],f.appId)}})(jQuery);(function(a){if(window.mysohu){mysohu.is_login=function(){if(!!a.cookie("ppinf")){return true}return false};mysohu.login=function(b){if(!mysohu.is_login()){a.ppDialog({appId:"1019",regRedirectUrl:location.href,title:"想要查看更多精彩内容，马上登录吧！",onLogin:function(c){if(a.isFunction(b)){b()}else{location.reload()}}});return false}return true};mysohu.is_mine=function(){if(mysohu.is_login()){var b=Base64.encode(PassportSC.cookieHandle()),c=(window.$space_config&&$space_config._xpt)?$space_config._xpt:"";if(b==c){return true}}return false}}})(jQuery);