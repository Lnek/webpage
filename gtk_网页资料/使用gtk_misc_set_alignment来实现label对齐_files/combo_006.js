(function(a){a(function(){function b(h,k){var j=this;var g=h.relatedTarget;var f=j.get(0);try{while(g&&g!==f){g=g.parentNode}if(g!==f){k()}}catch(i){}}var c=".mysohu",d=".ui-btn,.ui-btn-w60,.ui-btn-w80,.ui-btn-w100";a(document).delegate(d,"mouseenter"+c,function(f){var e=a(this);if(!e.hasClass("ui-btn-disabled")){e.removeClass("ui-btn-current").addClass("ui-btn-active")}}).delegate("span.page-num","mouseenter"+c,function(e){a(this).addClass("page-num-active").find(">p").show()}).delegate(d,"mouseleave"+c,function(f){var e=a(this);if(!e.hasClass("ui-btn-disabled")){e.removeClass("ui-btn-current ui-btn-active")}}).delegate("span.page-num","mouseleave"+c,function(e){a(this).removeClass("page-num-active").find(">p").hide()});a(".tabs-menu li>a").bind("focus"+c,function(f){this.blur()})})})(jQuery);
require("core::util::jQuery","core::util::beLogin","app::emote",function(b,d,a){var c={sets:{namespace:".tweet",edit_box:"#tweet_editor_box",leavemsg_wrapper:".main-leavemsg-place",publish_wrapper:".publish-wrapper",textarea_box:".main-leavemsg",vcode:"input.securitycode-text",vcode_img:"img.securitycode-img",vcode_link:"a.securitycode-switch",publish_btn:".leavemsg-btn",line_height:20,default_text:"对他说点什么",is_working:false,publish_url:"/a/guestbook/addMessage.htm?_input_encode=UTF-8",vcode_url:"/a/guestbook/vcode.htm",vcode_image_url:"/a/guestbook/rand.htm",default_height:18,line_height:18,min_height:72,max_height:180,link_to:$space_config._url+"guestbook/index.htm",is_working:false,on_close:null,manage:".message-manage",wrapper:".message-remark",message_post_url:"/a/guestbook/addMessage.htm?_input_encode=UTF-8",reply_textarea:".reply-textarea",max_words:400,helper:null},params:{receiverPassport:"",vcode:""},timer:null,templates:{message_dialog:['<div class="remark-message-wrapper remark-message-dialog">','  	 <div class="remark-message">','     	<div class="rk-message-con">','            <div class="rk-message-body">','            	<div class="post-area">','                  <div class="textarea-wrapper">','                      <textarea rows="1" cols="60" class="reply-textarea" name="replytextarea"></textarea>',"                  </div>","                </div>","            </div>","        </div>",'        <div class="rk-message-con">','            <div class="rk-message-body">','            	<input type="text" name="securitycode" class="securitycode-text" value="请输入验证码" maxlength="10" ><img class="securitycode-img" src="http://s3.suc.itc.cn/d/nil.gif"><span class="remind-rk-message">请输入图片中的文字，<a class="securitycode-switch" href="javascript:void(0);">看不清验证码？</a></span>',"            </div>","        </div>","     </div>","  </div>"].join("")},init:function(g){b.extend(c.sets,g||{});var h=b(c.sets.edit_box),f=b(c.sets.textarea_box,h),e=b(c.sets.publish_btn,h)},string_length:function(e){return e.replace(/[^\x00-\xff]/g,"**").length},string_sub:function(g,j){var h=/[^\x00-\xff]/g;if(c.string_length(g)<=j){return g}var e=Math.floor(j/2);for(var f=e;f<g.length;f++){if(c.string_length(g.substr(0,f))>=j){return g.substr(0,f)}}return g},login:function(){if(!b.cookie("ppinf")){b.ppDialog({appId:"1019",regRedirectUrl:location.href,title:"想要查看更多精彩内容，马上登录吧！",onLogin:function(e){location.reload()}});return false}return true},get_vcode:function(e){b.getJSON(c.sets.vcode_url+"?t="+ +new Date,function(f){if(typeof f!="undefined"){c.params.vcode=f.vcode;e[0].src="/a/guestbook/rand.htm?vcode="+f.vcode}},"json");return c.params.vcode},set_status:function(e){var f=this;if(f.length){f.removeClass("leavemsg-active leavemsg-disabled leavemsg-error");switch(e){case"active":f.addClass("leavemsg-active");break;case"disabled":f.addClass("leavemsg-disabled");break;case"error":f.addClass("leavemsg-error");break;default:break}}},textarea_blur:function(e){},on_dialog_load:function(){var e=this,f=b(".rk-message-emotion > .emotion-body",e),g=b("img.securitycode-img",e);c.get_vcode(g)},on_dialog_message:function(){var g=this,i=b(c.sets.reply_textarea,g),f=i.closest(".post-area"),e=b(".securitycode-text",g),h=b.extend(c.params,{content:i.val(),usercode:e.val()});if(b.trim(h.content)==""){c.set_status.call(f,"error");b.inform({icon:"icon-error",delay:3000,easyClose:true,content:"内容不能为空。",onClose:function(){i.focus()}})}else{if(c.string_length(b.trim(h.content))>c.sets.max_words){c.set_status.call(f,"error");b.inform({icon:"icon-error",delay:3000,easyClose:true,content:"内容不能超过200个字。",onClose:function(){i.focus()}})}else{if(b.trim(h.usercode)==""||b.trim(h.usercode)=="请输入验证码"){e.addClass("securitycode-text-active");b.inform({icon:"icon-error",delay:1500,easyClose:true,content:"验证码不能为空。",onClose:function(){e.focus()}})}else{b.post(c.sets.publish_url,h,function(j){if(j&&parseInt(j.status)===1){g.close();b.inform({icon:"icon-success",delay:2000,easyClose:true,content:j.statusText,onClose:function(){i.val("")}});return true}else{b.inform({icon:"icon-error",delay:3000,easyClose:true,content:j.statusText,onClose:function(){i.focus()}})}},"json")}}}return false},message_dialog:function(j){if(d()){return}if(j&&j.receiverPassport){c.params.receiverPassport=j.receiverPassport}else{return}var f="留言";if(j&&j.nick){f="给"+j.nick+f}var h=b.dialog({title:f,btns:["accept","cancel"],defaultBtn:"accept",labAccept:"发布",contentBtnHelp:true,className:"remark-reply-dialog",icon:"icon-notice",content:c.templates.message_dialog,onLoad:c.on_dialog_load,onBeforeAccept:c.on_dialog_message,onClose:c.sets.on_close}),k=b(c.sets.reply_textarea,h),e=k.closest(".post-area"),g=b("input.securitycode-text",h),i=b("img.securitycode-img",h);h.adjust().bind("click"+c.sets.namespace,function(m){var l=b(m.target);if(l.closest("img.securitycode-img").length||l.closest("a.securitycode-switch").length){c.get_vcode(i)}});k.bind("click"+c.sets.namespace,function(l){c.set_status.call(e,"active")}).bind("focus"+c.sets.namespace,function(l){c.set_status.call(e,"active")}).bind("blur"+c.sets.namespace,function(l){c.set_status.call(e,"normal")}).focus();g.bind("focus"+c.sets.namespace,function(l){b(this).addClass("securitycode-text-active");if(b.trim(b(this).val())=="请输入验证码"){b(this).val("")}}).bind("blur"+c.sets.namespace,function(l){b(this).removeClass("securitycode-text-active")});return h}};b(function(){mysohu.tweet=c;c.init()})});
