/*! formstone v0.8.29 [upload.js] 2015-11-25 | MIT License | formstone.it */

!function(a,b){"use strict";function c(a){if(b.support.file){var c="";c+='<div class="'+t.target+'">',c+=a.label,c+="</div>",c+='<input class="'+t.input+'" type="file"',a.multiple&&(c+=" multiple"),c+=">",a.baseClasses=[t.base,a.theme,a.customClass].join(" "),this.addClass(a.baseClasses).append(c),a.$input=this.find(s.input),a.queue=[],a.total=0,a.uploading=!1,a.disabled=!0,a.aborting=!1,this.on(u.click,s.target,a,i).on(u.dragEnter,a,k).on(u.dragOver,a,l).on(u.dragLeave,a,m).on(u.drop,a,n),a.$input.on(u.change,a,j),h.call(this,a)}}function d(a){b.support.file&&(a.$input.off(u.namespace),this.off(u.namespace).removeClass(a.baseClasses).html(""))}function e(b,c){var d;b.aborting=!0;for(var e in b.queue)b.queue.hasOwnProperty(e)&&(d=b.queue[e],("undefined"===a.type(c)||c>=0&&d.index===c)&&(d.started&&!d.complete?d.transfer.abort():f(b,d,"abort")));b.aborting=!1,p(b)}function f(a,b,c){b.error=!0,a.$el.trigger(u.fileError,[b,c]),a.aborting||p(a)}function g(a){a.disabled||(this.addClass(t.disabled),a.$input.prop("disabled",!0),a.disabled=!0)}function h(a){a.disabled&&(this.removeClass(t.disabled),a.$input.prop("disabled",!1),a.disabled=!1)}function i(a){v.killEvent(a);var b=a.data;b.disabled||b.$input.trigger(u.click)}function j(a){v.killEvent(a);var b=a.data,c=b.$input[0].files;!b.disabled&&c.length&&o(b,c)}function k(a){v.killEvent(a);var b=a.data;b.$el.addClass(t.dropping).trigger(u.fileDragEnter)}function l(a){v.killEvent(a);var b=a.data;b.$el.addClass(t.dropping).trigger(u.fileDragOver)}function m(a){v.killEvent(a);var b=a.data;b.$el.removeClass(t.dropping).trigger(u.fileDragLeave)}function n(a){v.killEvent(a);var b=a.data,c=a.originalEvent.dataTransfer.files;b.$el.removeClass(t.dropping),b.disabled||o(b,c)}function o(a,b){a.$el.trigger(u.queued,[b]);for(var c=[],d=0;d<b.length;d++){var e={index:a.total++,file:b[d],name:b[d].name,size:b[d].size,started:!1,complete:!1,error:!1,transfer:null};c.push(e),a.queue.push(e)}a.uploading||(x.on(u.beforeUnload,function(){return a.leave}),a.uploading=!0),a.$el.trigger(u.start,[c]),p(a)}function p(a){var b=0,c=[];for(var d in a.queue)!a.queue.hasOwnProperty(d)||a.queue[d].complete||a.queue[d].error||c.push(a.queue[d]);a.queue=c;for(var e in a.queue)if(a.queue.hasOwnProperty(e)){if(!a.queue[e].started){var f=new FormData;f.append(a.postKey,a.queue[e].file);for(var g in a.postData)a.postData.hasOwnProperty(g)&&f.append(g,a.postData[g]);q(a,f,a.queue[e])}if(b++,b>=a.maxQueue)return;d++}0===b&&(x.off(u.beforeUnload),a.uploading=!1,a.$el.trigger(u.complete))}function q(b,c,d){c=b.beforeSend.call(w,c,d),d.size>=b.maxSize||c===!1||d.error===!0?f(b,d,c?"size":"abort"):(d.started=!0,d.transfer=a.ajax({url:b.action,data:c,dataType:b.dataType,type:"POST",contentType:!1,processData:!1,cache:!1,xhr:function(){var c=a.ajaxSettings.xhr();return c.upload&&c.upload.addEventListener("progress",function(a){var c=0,e=a.loaded||a.position,f=a.total;a.lengthComputable&&(c=Math.ceil(e/f*100)),b.$el.trigger(u.fileProgress,[d,c])},!1),c},beforeSend:function(){b.$el.trigger(u.fileStart,[d])},success:function(a){d.complete=!0,b.$el.trigger(u.fileComplete,[d,a]),p(b)},error:function(a,c,e){f(b,d,e)}}))}var r=b.Plugin("upload",{widget:!0,defaults:{action:"",beforeSend:function(a){return a},customClass:"",dataType:"html",label:"Drag and drop files or click to select",leave:"You have uploads pending, are you sure you want to leave this page?",maxQueue:2,maxSize:5242880,multiple:!0,postData:{},postKey:"file",theme:"fs-light"},classes:["input","target","multiple","dropping","disabled"],methods:{_construct:c,_destruct:d,disable:g,enable:h,abort:e}}),s=r.classes,t=s.raw,u=r.events,v=r.functions,w=b.window,x=b.$window;u.complete="complete",u.fileComplete="filecomplete",u.fileDragEnter="filedragenter",u.fileDragLeave="filedragleave",u.fileDragOver="filedragover",u.fileError="fileerror",u.fileProgress="fileprogress",u.fileStart="filestart",u.start="start",u.queued="queued"}(jQuery,Formstone);