(()=>{var ce=190,de=280,le=100,oe=155,ne=35,he=90,me=155,Q=0,pe=300,ue=390,ie=1.8,$e=2,g=1.15,ae=0,Y=0,X=0,T=0,K=0,M=0,B=0,V=0,L=0,_,v,A,y,n,s,b=0,ve=0,f=null,q=!1,U=!1,O=!1,W=!1,se="STYLVOL";$(function(){$("#add_to_cart_wrapper").hide(),$(".note, .renders, .meta-block, .meta-grid-shape, .meta-grid-feel, .meta-grid-pattern, .meta-grid-colour, .meta-grid-edging, .meta-grid-size, .meta-grid-antislip, .invoice-buttons").addClass("hide-this"),$(".html-anti-slip, .html-buy-button, .shopify-buy__btn").addClass("disabled"),$("#anti-slip").attr("disabled",!0),setTimeout(()=>{$(".html-buy-button").removeClass("disabled"),$(".shopify-buy__btn").addClass("disabled")},2e3),$("#carpet_width").val(200),$("#carpet_length").val(300),$("#carpet_diameter").val(200);var j=$("#discount-code"),w=$(".discount-grid"),C=$(".discount-success");function x(){var m=j.val().toUpperCase(),r=m===se;w.toggle(!r),C.toggle(r),j.attr("data-discount",r?"true":"false")}$("#apply-discount").click(x),$("input").change(function(){($("#rectangle").is(":checked")||$("#round").is(":checked"))&&($(".discount-grid").css("display","grid"),$(".discount-success").css("display","none"),$("#discount-code").attr("data-discount","false"));var m=$(":input[data-feel^='curvy']").is(":checked");$("#discount-box").css("display",m?"block":"none"),$("#discount-code").attr("data-discount",m&&$("#discount-code").val()===se?"true":"false"),$(".renders img").addClass("render hide-this"),q===!1&&$(":input[data-feel='soft']").is(":checked")&&($(":input[data-soft]").first().prop("checked",!0),$(":input[data-soft]").siblings().removeClass("w--redirected-checked"),$(":input[data-soft]").first().siblings().addClass("w--redirected-checked"),q=!0),U===!1&&$(":input[data-feel='ultra-soft']").is(":checked")&&($(":input[data-ultra-soft]").first().prop("checked",!0),$(":input[data-ultra-soft]").siblings().removeClass("w--redirected-checked"),$(":input[data-ultra-soft]").first().siblings().addClass("w--redirected-checked"),U=!0),O===!1&&$(":input[data-feel='textured']").is(":checked")&&($(":input[data-textured]").first().prop("checked",!0),$(":input[data-textured]").siblings().removeClass("w--redirected-checked"),$(":input[data-textured]").first().siblings().addClass("w--redirected-checked"),O=!0),W===!1&&$(":input[data-feel='pattern']").is(":checked")&&($(":input[data-pattern]").first().prop("checked",!0),$(":input[data-pattern]").siblings().removeClass("w--redirected-checked"),$(":input[data-pattern]").first().siblings().addClass("w--redirected-checked"),$(":input[data-pattern-colour]").first().prop("checked",!0),$(":input[data-pattern-colour]").siblings().removeClass("w--redirected-checked"),$(":input[data-pattern-colour]").first().siblings().addClass("w--redirected-checked"),W=!0),$("#soft").is(":checked")?(U=!1,O=!1,W=!1):$("#ultra-soft").is(":checked")?(q=!1,O=!1,W=!1):$("#textured").is(":checked")?(q=!1,U=!1,W=!1):$("#pattern").is(":checked")&&(q=!1,U=!1,O=!1),B=document.getElementById("carpet_width").value,V=document.getElementById("carpet_length").value,L=document.getElementById("carpet_diameter").value;function r(h,t,k,o){var te=h.charAt(0).toUpperCase()+h.slice(1)+" must be between "+k+"cm and "+o+"cm";return t>o?($("#carpet_"+h).val(o),alert(te),o):t<k?($("#carpet_"+h).val(k),alert(te),k):t}B=r("width",B,80,400),V=r("length",V,100,1e3),L=r("diameter",L,100,400),$("#meta-width").html(B+" cm"),$("#meta-length").html(V+" cm"),$("#meta-diameter").html("\u2300 "+L+" cm"),width_m=B/100,length_m=V/100;var d=Math.min(width_m,length_m),i=Math.max(width_m,length_m);if(width_m=d,length_m=i,i<=2&&d<=2&&(width_m=i,length_m=d),$("#Chevron").is(":checked")||$("#Cubed").is(":checked")||$("#Mesh").is(":checked")||$("#Relic").is(":checked")||$("#Scales").is(":checked")||$("#Swirl").is(":checked")||$("#Tulle").is(":checked")?$(".pattern-colours, .patter-colour .colour").css("display","block"):$(".pattern-colours, .patter-colour .colour").css("display","none"),$("#pattern").is(":checked")&&(width_m=d,length_m=i),width_m<=2)var l=2;else var l=4;S=length_m+.2;var p=L/100,Z=L/100+.2;ae=width_m*S;var P=l*S;if($("#rectangle").is(":checked")?($(".feel").show(),$(".radio-button-field.trim").show(),$(".trim").show(),$(".trim-swatches").show()):$("#round").is(":checked")?($(".feel").show(),$(".radio-button-field.trim").hide(),$(".trim-swatches").show()):$("#curvy").is(":checked")&&$(".radio-button-field.trim").show(),$('input[type="radio"][data-colour]:checked').length>0?$(".trim-colours").show():$(".trim-colours").hide(),$('input[type="radio"][data-trim]:checked').length>0?$(".size").show():$(".size").hide(),$("#soft").is(":checked")){$(".soft-colours").show(),$(".ultra-soft-colours").hide(),$(".textured-colours").hide(),$(".choose-pattern").hide(),$(".pattern-colours").hide();var R="Soft";T=ce,$(".meta-grid-feel").removeClass("hide-this"),$("#meta-feel").html(R)}else if($("#ultra-soft").is(":checked")){$(".soft-colours").hide(),$(".ultra-soft-colours").show(),$(".textured-colours").hide(),$(".choose-pattern").hide(),$(".pattern-colours").hide();var R="Ultra Soft";T=de,$(".meta-grid-feel").removeClass("hide-this"),$("#meta-feel").html(R)}else if($("#textured").is(":checked")){$(".soft-colours").hide(),$(".ultra-soft-colours").hide(),$(".textured-colours").show(),$(".choose-pattern").hide(),$(".pattern-colours").hide();var R="Textured";T=le,$(".meta-grid-feel").removeClass("hide-this"),$("#meta-feel").html(R)}else if($("#pattern").is(":checked")){$(".soft-colours").hide(),$(".ultra-soft-colours").hide(),$(".textured-colours").hide(),$(".choose-pattern").show(),$(".pattern-colours").show();var R="Pattern";T=oe,$(".meta-grid-feel").removeClass("hide-this"),$("#meta-feel").html(R)}if($("#Chevron").is(":checked")&&$("#pattern").is(":checked")?(f="Chevron",$("#meta-pattern").html(f),$(".meta-grid-pattern").removeClass("hide-this")):$("#Cubed").is(":checked")&&$("#pattern").is(":checked")?(f="Cubed",$("#meta-pattern").html(f),$(".meta-grid-pattern").removeClass("hide-this")):$("#Mesh").is(":checked")&&$("#pattern").is(":checked")?(f="Mesh",$("#meta-pattern").html(f),$(".meta-grid-pattern").removeClass("hide-this")):$("#Relic").is(":checked")&&$("#pattern").is(":checked")?(f="Relic",$("#meta-pattern").html(f),$(".meta-grid-pattern").removeClass("hide-this")):$("#Scales").is(":checked")&&$("#pattern").is(":checked")?(f="Scales",$("#meta-pattern").html(f),$(".meta-grid-pattern").removeClass("hide-this")):$("#Swirl").is(":checked")&&$("#pattern").is(":checked")?(f="Swirl",$("#meta-pattern").html(f),$(".meta-grid-pattern").removeClass("hide-this")):$("#Tulle").is(":checked")&&$("#pattern").is(":checked")?(f="Tulle",$("#meta-pattern").html(f),$(".meta-grid-pattern").removeClass("hide-this")):$("#curvy").is(":checked")&&$(".meta-grid-pattern").addClass("hide-this"),$("#pattern").is(":checked")||($("#meta-pattern").html(""),$(".meta-grid-pattern").addClass("hide-this"),$(":input[data-pattern]").prop("checked",!1)),$(":input[data-trim='overlocking']").is(":checked"))X=ne,v="Overlocking",$("#meta-edging").html(v);else if($(":input[data-trim='trim']").is(":checked")){X=me;var G=["chai","veld","moss","shade","sable","slate","mallow","blaze","frost","reef","jet","coco"];$.each(G,function(h,t){if($(":input[data-trim-colour='"+t+"']").is(":checked"))return v=t.charAt(0).toUpperCase()+t.slice(1),$("."+t).removeClass("hide-this"),$("#meta-edging").html(v),!1})}if($("#round").is(":checked")){var E="Round";Q=ue,width_m=p,length_m=p,d=p,width_m<=2?l=2:l=4;var S=length_m+.2;Y=2*Math.PI*(p/2),K=Y*he,ae=Math.PI*(p/2)*(p/2),P=l*S,$(":input[data-trim='trim']").prop("checked",!1),$(":input[data-trim='trim']").siblings().removeClass("w--redirected-checked"),$(":input[data-trim='overlocking']").prop("checked",!0),$(":input[data-trim='overlocking']").siblings().addClass("w--redirected-checked"),v="Overlocking",$("#meta-edging").html(v),$("#meta-shape").html(E),$("#meta-size").css("display","none"),$("#meta-diameter").css("display","block"),$(".trim-swatches").addClass("hide-this"),$(".width-wrapper").addClass("hide-this"),$(".length-wrapper").addClass("hide-this"),$(".diameter-wrapper").removeClass("hide-this");var D=P*T,F=width_m*S*T*ie,z=D+F}else if($("#rectangle").is(":checked")){var E="Rectangle";Q=pe,Y=(width_m+length_m)*2,K=Y*X,$("#meta-shape").html(E),$("#meta-size").css("display","flex"),$("#meta-diameter").css("display","none"),$(".trim-swatches").removeClass("hide-this"),$(".width-wrapper").removeClass("hide-this"),$(".length-wrapper").removeClass("hide-this"),$(".diameter-wrapper").addClass("hide-this");var D=P*T,F;$("#pattern").is(":checked")?F=width_m*S*T*$e:F=width_m*S*T*ie;var z=D+F}$("#round").is(":checked")?($(".s-renders").addClass("hide-this"),$(".t-renders").addClass("hide-this"),$(".et-renders").addClass("hide-this"),$(".p-renders").addClass("hide-this"),$(".s-renders-round").addClass("hide-this"),$(".t-renders-round").addClass("hide-this"),$(".et-renders-round").addClass("hide-this"),$(".p-renders-round").addClass("hide-this"),$(".minimat-renders").addClass("hide-this"),$("#soft").is(":checked")||$("#ultra-soft").is(":checked")?($(".s-renders-round").removeClass("hide-this"),b=0,c()):$("#textured").is(":checked")?($(".textured-colours .colour").css("display","block"),$(".t-renders-round").removeClass("hide-this"),b=0,c()):$("#extra_textured").is(":checked")?($(".et-renders-round").removeClass("hide-this"),b=0,c()):$("#pattern").is(":checked")&&($(".p-renders-round").removeClass("hide-this"),b=1,c())):$("#rectangle").is(":checked")?($(".s-renders").addClass("hide-this"),$(".t-renders").addClass("hide-this"),$(".et-renders").addClass("hide-this"),$(".p-renders").addClass("hide-this"),$(".s-renders-round").addClass("hide-this"),$(".t-renders-round").addClass("hide-this"),$(".et-renders-round").addClass("hide-this"),$(".p-renders-round").addClass("hide-this"),$(".minimat-renders").addClass("hide-this"),$("#soft").is(":checked")||$("#ultra-soft").is(":checked")?($(".s-renders").removeClass("hide-this"),b=0,c()):$("#textured").is(":checked")?($(".t-renders").removeClass("hide-this"),b=0,c()):$("#extra_textured").is(":checked")?($(".et-renders").removeClass("hide-this"),b=0,c()):$("#pattern").is(":checked")&&($(".p-renders").removeClass("hide-this"),b=1,c())):$("#curvy").is(":checked")&&($(".s-renders").addClass("hide-this"),$(".t-renders").addClass("hide-this"),$(".et-renders").addClass("hide-this"),$(".p-renders").addClass("hide-this"),$(".s-renders-round").addClass("hide-this"),$(".t-renders-round").addClass("hide-this"),$(".et-renders-round").addClass("hide-this"),$(".p-renders-round").addClass("hide-this")),($("#round").is(":checked")||$("#rectangle").is(":checked")||$("#curvy").is(":checked"))&&($(".preview-message").addClass("hide-this"),$(".meta-block").removeClass("hide-this"),$(".meta-grid-shape").removeClass("hide-this")),$(":input[data-colour]").is(":checked")&&($(".renders").removeClass("hide-this"),$(".meta-grid-colour").removeClass("hide-this"),$(".note").removeClass("hide-this")),$("#rectangle").is(":checked")&&!$(":input[data-colour]").is(":checked")?$(".p-renders").addClass("hide-this"):$("#round").is(":checked")&&!$(":input[data-colour]").is(":checked")&&$(".p-renders-round").addClass("hide-this"),$(":input[data-trim]").is(":checked")&&($(".meta-grid-edging").removeClass("hide-this"),$(".meta-grid-size").removeClass("hide-this")),$("#round").is(":checked")&&$(":input[data-colour]").is(":checked")&&$(":input[data-trim]").is(":checked")&&$(".size").css({display:"grid",opacity:"1"});function H(h,t,k){$(":input["+h+"]").each(function(){var o=$(this).data(h.replace("data-",""));$(this).is(":checked")&&($("."+t+o).removeClass("hide-this"),_=o.charAt(0).toUpperCase()+o.slice(1))})}function J(){var h={charcoal:"#222",silver:"#565656",mustard:"#b4a240",bronze:"#b48645",metal:"#92a19b",earthy:"#b5a184",dove:"#ccc3b5"};$(":input[data-colour]").each(function(){var t=$(this).data("colour");if($(this).is(":checked")){_=t.charAt(0).toUpperCase()+t.slice(1);var k=h[t];k&&$(".p-colour-overlay").css("background-color",k),$(".s-"+t+", .t-"+t+", .et-"+t).removeClass("hide-this")}})}if(H("data-pattern","p-",""),J(),$("#handlePatternColours").html(_),d<=1.2?M=326.09:d<=1.6?M=434.78:d<=2?M=543.48:d<=3?M=652.17:M=817.39,y=width_m*length_m,A=70/1.15,n=y*A,$("#anti-slip").is(":checked")){var e=z+K+n+Q+M;$(".meta-grid-antislip").removeClass("hide-this")}else{var e=z+K+Q+M;$(".meta-grid-antislip").addClass("hide-this")}s=n*g,s=Math.ceil(s),$(".anti-slip-price").text("R "+s);var u=e*g,a=Math.ceil(u);if($("#curvy").is(":checked")?($(".form-curvy").css("display","block"),$(".form-main").css("display","none"),$(".renders-main").css("display","none"),$(".renders-curvy").css("display","block"),$("#curvy-sizes").css("display","flex")):($(".form-curvy").css("display","none"),$(".form-main").css("display","block"),$(".renders-main").css("display","block"),$(".renders-curvy").css("display","none")),$("#meta-colour").html(_),$("#curvy").is(":checked")){if($(".anti-slip-price").text(""),M=1,$(".meta-grid-feel").removeClass("hide-this"),$("#meta-shape").html("Curvy"),$("#meta-feel").html("Curvy Soft"),$("#meta-colour").html(""),$("#meta-edging").html(""),$("#meta-size").css("display","flex"),$("#meta-diameter").css("display","none"),$("#meta-length").html(""),$("#meta-width").html(""),$(":input[data-feel='curvy_small']").is(":checked")){$(".meta-grid-size").removeClass("hide-this"),$("#meta-shape").html("Curvy Small"),$("#meta-size").css("display","flex"),$("#meta-width").html("120 cm"),$("#meta-length").html("160 cm"),a=2300,u=2300,e=2300;let t=(e/4).toFixed(2);if($(".float-price").text("R "+t),$("#total_amount").text("R 2300"),y=1.2*1.6,n=y*A,s=n*g,s=Math.ceil(s),$(".anti-slip-price").text("R "+s),$("#anti-slip").is(":checked")){a=Math.ceil(e+n*g),u=a,e=a,$("#total_amount").text("R "+e);let o=(e/4).toFixed(2);$(".float-price").text("R "+o)}}else if($(":input[data-feel='curvy_medium']").is(":checked")){$(".meta-grid-size").removeClass("hide-this"),$("#meta-shape").html("Curvy Medium"),$("#meta-size").css("display","flex"),$("#meta-width").html("200 cm"),$("#meta-length").html("300 cm"),a=4800,u=4800,e=4800;let t=(e/4).toFixed(2);if($(".float-price").text("R "+t),$("#total_amount").text("R "+e),y=2*3,n=y*A,s=n*g,s=Math.ceil(s),$(".anti-slip-price").text("R "+s),$("#anti-slip").is(":checked")){a=Math.ceil(e+n*g),u=a,e=a,$("#total_amount").text("R "+e);let o=(e/4).toFixed(2);$(".float-price").text("R "+o)}}else if($(":input[data-feel='curvy_large']").is(":checked")){$(".meta-grid-size").removeClass("hide-this"),$("#meta-shape").html("Curvy Large"),$("#meta-size").css("display","flex"),$("#meta-width").html("300 cm"),$("#meta-length").html("350 cm"),a=7900,u=7900,e=7900;let t=(e/4).toFixed(2);if($(".float-price").text("R "+t),$("#total_amount").text("R "+e),y=3*3.5,n=y*A,s=n*g,s=Math.ceil(s),$(".anti-slip-price").text("R "+s),$("#anti-slip").is(":checked")){a=Math.ceil(e+n*g),u=a,e=a,$("#total_amount").text("R "+e);let o=(e/4).toFixed(2);$(".float-price").text("R "+o)}}else if($(":input[data-feel='curvy_mini_mat_small']").is(":checked")){$(".meta-grid-size").removeClass("hide-this"),$("#meta-shape").html("Curvy Mini Mat Small "),$("#meta-size").css("display","flex"),$("#meta-width").html("50 cm"),$("#meta-length").html("80 cm"),a=700,u=700,e=700;let t=(e/4).toFixed(2);if($(".float-price").text("R "+t),$("#total_amount").text("R "+e),y=3*3.5,n=y*A,s=n*g,s=Math.ceil(s),$(".anti-slip-price").text("R "+s),$("#anti-slip").is(":checked")){a=Math.ceil(e+n*g),u=a,e=a,$("#total_amount").text("R "+e);let o=(e/4).toFixed(2);$(".float-price").text("R "+o)}}else if($(":input[data-feel='curvy_mini_mat_large']").is(":checked")){$(".meta-grid-size").removeClass("hide-this"),$("#meta-shape").html("Curvy Mini Mat Large "),$("#meta-size").css("display","flex"),$("#meta-width").html("60 cm"),$("#meta-length").html("100 cm"),a=900,u=900,e=900;let t=(e/4).toFixed(2);if($(".float-price").text("R "+t),$("#total_amount").text("R "+e),y=3*3.5,n=y*A,s=n*g,s=Math.ceil(s),$(".anti-slip-price").text("R "+s),$("#anti-slip").is(":checked")){a=Math.ceil(e+n*g),u=a,e=a,$("#total_amount").text("R "+e);let o=(e/4).toFixed(2);$(".float-price").text("R "+o)}}$(":input[data-feel-curvy]").is(":checked")?($("#curvy-colours").css("display","grid"),$(":input[curvy-colour]").is(":checked")?$("#curvy-trims").css("display","grid"):$("#curvy-trims").css("display","none")):($("#curvy-colours").css("display","none"),$("#curvy-trims").css("display","none")),$(":input[data-colour='chartreuse']").is(":checked")&&(_="Chartreuse",$(".close-chartreuse").removeClass("hide-this")),$(":input[data-colour='blush']").is(":checked")&&(_="Blush",$(".close-blush").removeClass("hide-this")),$(":input[data-colour='peach']").is(":checked")&&(_="Peach",$(".close-peach").removeClass("hide-this")),$(":input[data-colour='brick']").is(":checked")&&(_="Brick",$(".close-brick").removeClass("hide-this")),$(":input[data-colour='moss']").is(":checked")&&(_="Moss",$(".close-moss").removeClass("hide-this")),$(":input[data-colour='stormy-sea']").is(":checked")&&(_="Stormy Sea",$(".close-stormy-sea").removeClass("hide-this")),$(":input[data-colour='navy']").is(":checked")&&(_="Navy",$(".close-navy").removeClass("hide-this")),($(":input[data-feel='curvy_mini_mat_small']").is(":checked")||$(":input[data-feel='curvy_mini_mat_large']").is(":checked"))&&$(".minimat-renders").removeClass("hide-this"),($(":input[data-feel='curvy_mini_mat_small']").is(":checked")||$(":input[data-feel='curvy_mini_mat_large']").is(":checked"))&&$(":input[data-colour='chartreuse']").is(":checked")&&($(".minimat-overlay").css("background-color","#8d7b01"),$(".minimat-grey-image").removeClass("hide-this")),($(":input[data-feel='curvy_mini_mat_small']").is(":checked")||$(":input[data-feel='curvy_mini_mat_large']").is(":checked"))&&$(":input[data-colour='blush']").is(":checked")&&($(".minimat-overlay").css("background-color","#b0999b"),$(".minimat-grey-image").removeClass("hide-this")),($(":input[data-feel='curvy_mini_mat_small']").is(":checked")||$(":input[data-feel='curvy_mini_mat_large']").is(":checked"))&&$(":input[data-colour='peach']").is(":checked")&&($(".minimat-overlay").css("background-color","#8b5e4d"),$(".minimat-grey-image").removeClass("hide-this")),($(":input[data-feel='curvy_mini_mat_small']").is(":checked")||$(":input[data-feel='curvy_mini_mat_large']").is(":checked"))&&$(":input[data-colour='brick']").is(":checked")&&($(".minimat-overlay").css("background-color","#5f362e"),$(".minimat-grey-image").removeClass("hide-this")),($(":input[data-feel='curvy_mini_mat_small']").is(":checked")||$(":input[data-feel='curvy_mini_mat_large']").is(":checked"))&&$(":input[data-colour='moss']").is(":checked")&&($(".minimat-overlay").css("background-color","#736d4a"),$(".minimat-grey-image").removeClass("hide-this")),($(":input[data-feel='curvy_mini_mat_small']").is(":checked")||$(":input[data-feel='curvy_mini_mat_large']").is(":checked"))&&$(":input[data-colour='stormy-sea']").is(":checked")&&($(".minimat-overlay").css("background-color","#4c5d5e"),$(".minimat-grey-image").removeClass("hide-this")),($(":input[data-feel='curvy_mini_mat_small']").is(":checked")||$(":input[data-feel='curvy_mini_mat_large']").is(":checked"))&&$(":input[data-colour='navy']").is(":checked")&&($(".minimat-overlay").css("background-color","#313740"),$(".minimat-grey-image").removeClass("hide-this")),$(":input[data-feel='curvy_small']").is(":checked")&&$(":input[data-colour='chartreuse']").is(":checked")&&$(".cs-chartreuse").removeClass("hide-this"),$(":input[data-feel='curvy_small']").is(":checked")&&$(":input[data-colour='blush']").is(":checked")&&$(".cs-blush").removeClass("hide-this"),$(":input[data-feel='curvy_small']").is(":checked")&&$(":input[data-colour='peach']").is(":checked")&&$(".cs-peach").removeClass("hide-this"),$(":input[data-feel='curvy_small']").is(":checked")&&$(":input[data-colour='brick']").is(":checked")&&$(".cs-brick").removeClass("hide-this"),$(":input[data-feel='curvy_small']").is(":checked")&&$(":input[data-colour='moss']").is(":checked")&&$(".cs-moss").removeClass("hide-this"),$(":input[data-feel='curvy_small']").is(":checked")&&$(":input[data-colour='stormy-sea']").is(":checked")&&$(".cs-stormy-sea").removeClass("hide-this"),$(":input[data-feel='curvy_small']").is(":checked")&&$(":input[data-colour='navy']").is(":checked")&&$(".cs-navy").removeClass("hide-this"),$(":input[data-feel='curvy_medium']").is(":checked")&&$(":input[data-colour='chartreuse']").is(":checked")&&$(".cm-chartreuse").removeClass("hide-this"),$(":input[data-feel='curvy_medium']").is(":checked")&&$(":input[data-colour='blush']").is(":checked")&&$(".cm-blush").removeClass("hide-this"),$(":input[data-feel='curvy_medium']").is(":checked")&&$(":input[data-colour='peach']").is(":checked")&&$(".cm-peach").removeClass("hide-this"),$(":input[data-feel='curvy_medium']").is(":checked")&&$(":input[data-colour='brick']").is(":checked")&&$(".cm-brick").removeClass("hide-this"),$(":input[data-feel='curvy_medium']").is(":checked")&&$(":input[data-colour='moss']").is(":checked")&&$(".cm-moss").removeClass("hide-this"),$(":input[data-feel='curvy_medium']").is(":checked")&&$(":input[data-colour='stormy-sea']").is(":checked")&&$(".cm-stormy-sea").removeClass("hide-this"),$(":input[data-feel='curvy_medium']").is(":checked")&&$(":input[data-colour='navy']").is(":checked")&&$(".cm-navy").removeClass("hide-this"),$(":input[data-feel='curvy_large']").is(":checked")&&$(":input[data-colour='chartreuse']").is(":checked")&&$(".cl-chartreuse").removeClass("hide-this"),$(":input[data-feel='curvy_large']").is(":checked")&&$(":input[data-colour='blush']").is(":checked")&&$(".cl-blush").removeClass("hide-this"),$(":input[data-feel='curvy_large']").is(":checked")&&$(":input[data-colour='peach']").is(":checked")&&$(".cl-peach").removeClass("hide-this"),$(":input[data-feel='curvy_large']").is(":checked")&&$(":input[data-colour='brick']").is(":checked")&&$(".cl-brick").removeClass("hide-this"),$(":input[data-feel='curvy_large']").is(":checked")&&$(":input[data-colour='moss']").is(":checked")&&$(".cl-moss").removeClass("hide-this"),$(":input[data-feel='curvy_large']").is(":checked")&&$(":input[data-colour='stormy-sea']").is(":checked")&&$(".cl-stormy-sea").removeClass("hide-this"),$(":input[data-feel='curvy_large']").is(":checked")&&$(":input[data-colour='navy']").is(":checked")&&$(".cl-navy").removeClass("hide-this"),$(":input[data-trim='curvy']").is(":checked")&&$(".meta-grid-edging").removeClass("hide-this"),$(":input[data-trim-colour='chartreuse']").is(":checked")&&(v="Chartreuse Edge",$(".close-chartreuse-trim").removeClass("hide-this")),$(":input[data-trim-colour='blush']").is(":checked")&&(v="Blush Edge",$(".close-blush-trim").removeClass("hide-this")),$(":input[data-trim-colour='peach']").is(":checked")&&(v="Peach Edge",$(".close-peach-trim").removeClass("hide-this")),$(":input[data-trim-colour='brick']").is(":checked")&&(v="Brick Edge",$(".close-brick-trim").removeClass("hide-this")),$(":input[data-trim-colour='moss']").is(":checked")&&(v="Moss Edge",$(".close-moss-trim").removeClass("hide-this")),$(":input[data-trim-colour='stormy-sea']").is(":checked")&&(v="Stormy Sea Edge",$(".close-stormy-sea-trim").removeClass("hide-this")),$(":input[data-trim-colour='navy']").is(":checked")&&(v="Navy Edge",$(".close-navy-trim").removeClass("hide-this")),$(":input[data-feel='curvy_large']").is(":checked")?($(".minimat-renders").addClass("hide-this"),$(":input[data-trim-colour='chartreuse']").is(":checked")&&$(".large-chartreuse").removeClass("hide-this"),$(":input[data-trim-colour='blush']").is(":checked")&&$(".large-blush").removeClass("hide-this"),$(":input[data-trim-colour='peach']").is(":checked")&&$(".large-peach").removeClass("hide-this"),$(":input[data-trim-colour='brick']").is(":checked")&&$(".large-brick").removeClass("hide-this"),$(":input[data-trim-colour='moss']").is(":checked")&&$(".large-moss").removeClass("hide-this"),$(":input[data-trim-colour='stormy-sea']").is(":checked")&&$(".large-stormy-sea").removeClass("hide-this"),$(":input[data-trim-colour='navy']").is(":checked")&&$(".large-navy").removeClass("hide-this")):$(":input[data-feel='curvy_medium']").is(":checked")?($(".minimat-renders").addClass("hide-this"),$(":input[data-trim-colour='chartreuse']").is(":checked")&&$(".medium-chartreuse").removeClass("hide-this"),$(":input[data-trim-colour='blush']").is(":checked")&&$(".medium-blush").removeClass("hide-this"),$(":input[data-trim-colour='peach']").is(":checked")&&$(".medium-peach").removeClass("hide-this"),$(":input[data-trim-colour='brick']").is(":checked")&&$(".medium-brick").removeClass("hide-this"),$(":input[data-trim-colour='moss']").is(":checked")&&$(".medium-moss").removeClass("hide-this"),$(":input[data-trim-colour='stormy-sea']").is(":checked")&&$(".medium-stormy-sea").removeClass("hide-this"),$(":input[data-trim-colour='navy']").is(":checked")&&$(".medium-navy").removeClass("hide-this")):$(":input[data-feel='curvy_small']").is(":checked")&&($(".minimat-renders").addClass("hide-this"),$(":input[data-trim-colour='chartreuse']").is(":checked")&&$(".small-chartreuse").removeClass("hide-this"),$(":input[data-trim-colour='blush']").is(":checked")&&$(".small-blush").removeClass("hide-this"),$(":input[data-trim-colour='peach']").is(":checked")&&$(".small-peach").removeClass("hide-this"),$(":input[data-trim-colour='brick']").is(":checked")&&$(".small-brick").removeClass("hide-this"),$(":input[data-trim-colour='moss']").is(":checked")&&$(".small-moss").removeClass("hide-this"),$(":input[data-trim-colour='stormy-sea']").is(":checked")&&$(".small-stormy-sea").removeClass("hide-this"),$(":input[data-trim-colour='navy']").is(":checked")&&$(".small-navy").removeClass("hide-this")),$(":input[data-minimat]").is(":checked")?$(":input[data-trim-colour='chartreuse']").is(":checked")?$(".minimat-chartreuse").removeClass("hide-this"):$(":input[data-trim-colour='blush']").is(":checked")?$(".minimat-blush").removeClass("hide-this"):$(":input[data-trim-colour='peach']").is(":checked")?$(".minimat-peach").removeClass("hide-this"):$(":input[data-trim-colour='brick']").is(":checked")?$(".minimat-brick").removeClass("hide-this"):$(":input[data-trim-colour='moss']").is(":checked")?$(".minimat-moss").removeClass("hide-this"):$(":input[data-trim-colour='stormy-sea']").is(":checked")?$(".minimat-stormy-sea").removeClass("hide-this"):$(":input[data-trim-colour='navy']").is(":checked")&&$(".minimat-navy").removeClass("hide-this"):$(".trim-minimat img").addClass("hide-this");var ee=$(":input[curvy-colour]:checked").data("curvy-colour");$("#meta-colour").html(ee),$("#meta-edging").html(v)}if($(":input[curvy-colour]").click(function(){$(".renders-curvy").removeClass("hide-this"),$(".renders-closeup").addClass("hide-this"),$(".note").html("&nbsp;")}),$(":input[data-trim='curvy']").click(function(){$(".renders-curvy").addClass("hide-this"),$(".renders-closeup").removeClass("hide-this"),$(".renders-closeup").css("display","block"),$(".note").html("Close up")}),$(":input[data-colour]").is(":checked")&&$(":input[data-trim]").is(":checked")){$(".add-to-cart-replacement").addClass("hide"),$(".html-anti-slip").removeClass("disabled"),$("#anti-slip").removeAttr("disabled"),$(".html-buy-button, .shopify-buy__btn").removeClass("disabled"),$(".html-buy-button").removeClass("hide"),$(".invoice-buttons").removeClass("hide"),$("#total_amount").html("R "+a);let t=(a/4).toFixed(2);$(".float-price").text("R "+t)}$(":input[data-shape='rectangle'], :input[data-shape='round']").is(":checked")&&$(":input[data-feel]").is(":checked")&&$(":input[data-colour]").is(":checked")&&$(":input[data-trim]").is(":checked")||$(":input[data-shape]").is(":checked")&&$(":input[data-feel='pattern']").is(":checked")&&$(":input[data-pattern]").is(":checked")&&$(":input[data-colour]").is(":checked")&&$(":input[data-trim]").is(":checked")||$(":input[data-shape='curvy']").is(":checked")&&$(":input[data-feel-curvy]").is(":checked")&&$(":input[curvy-colour]").is(":checked")&&$(":input[data-trim='curvy']").is(":checked")?$("#add_to_cart_wrapper").show():$("#add_to_cart_wrapper").hide(),$("#curvy").is(":checked")?$(".discount-grid").show():$(".discount-grid").hide()}),$(".pdf-line-item").remove(),$(document).on("click",".item-remove",function(){$(this).parent().remove(),$(".pdf-line-item").length==0?$(".invoice, .get-invoice").addClass("hide"):I()});function I(){var m=0;$(".price-interger").each(function(){m+=parseInt($(this).text());var r=m*.15,d=Math.ceil(r),i="<span>R </span>"+m.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","),l="<span>R </span>"+d.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",");$("#pdf-sub-total").html(i),$("#pdf-vat-total").html(l),$("#pdf-total-due").html(i),$(".button-wrapper").removeClass("hide"),$(".get-invoice").removeClass("hide")})}$("#add-to-invoice-text, #add-to-invoice").off().click(function(){$(".invoice").removeClass("hide"),$(".get-invoice").removeClass("hide");var m=$("#meta-shape").text(),r=$("#meta-feel").text(),d=$("#meta-colour").text(),i=$("#meta-edging").text(),l=$("#meta-pattern").text();if(l!=null?l=" "+l:l="",$("#round").is(":checked"))var p=$("#meta-diameter").text();else var p=$("#meta-size").text();var Z=$("#total_amount").text(),P=Z.substring(2),R=P.replace(/\B(?=(\d{3})+(?!\d))/g,","),G="Shape:&nbsp;"+m+" / Feel:&nbsp;"+r+l+" / Colour:&nbsp;"+d+" / Edging:&nbsp;"+i+" / Size:&nbsp;"+p,E="<div class='w-layout-grid pdf-line-item'><div class='item-detail'>"+G+"</div><div class='item-price' data-price='"+P+"' >R&nbsp;"+R+"<span class='price-interger' style='display:none;'>"+P+"</span></div><div class='item-remove'><div class='remove-bar'></div><div class='remove-bar flip'></div></div></div>";$("#pdf-items").append(E);var S="<input type='hidden' id='"+P+"' name='Line Item' value='"+G+" / Price: R&nbsp;"+P+"'>";$("#form-fields").append(S),I(),$("#download-invoice").click(function(){var D=$("#invoiceCompany").val(),F=$("#invoiceName").val(),z=$("#invoicePhone").val(),H=$("#invoiceEmail").val(),J=$("#invoiceVat").val(),e=$("#invoiceAddress").val(),u=Math.round(new Date().getTime()/1e3);if($("#pdf-number").replaceWith("# "+u),$("#pdf-company").replaceWith(D),$("#pdf-contact").replaceWith(F),$("#pdf-phone").replaceWith(z),$("#pdf-email").replaceWith(H),$("#pdf-vat").replaceWith(J),$("#pdf-address").replaceWith(e),D==""&&$(".pdf-company, #pdf-company").remove(),z==""&&$(".pdf-phone, #pdf-phone").remove(),J==""&&$(".pdf-vat, #pdf-vat").remove(),e==""&&$(".pdf-address, #pdf-address").remove(),F!=""&&H!=""){var a=new jsPDF;a.addHTML($("#pdf-invoice").css({width:"29.7cm",height:"42cm"}),$("#pdf-invoice")[0],function(){a.save("yudu-pro-forma-invoice-"+u+".pdf");var ee=!0})}$("#pdf-invoice").css({width:"auto",height:"auto"})})});let c=()=>{b?$(".p-colour-overlay").css("opacity","1"):$(".p-colour-overlay").css("opacity","0")},N=()=>{ve?$(".minimat-overlay").css("opacity","1"):$(".minimat-overlay").css("opacity","0")}});$(document).ready(function(){$(".samples-detail.carpet").remove();var j,w,C,x,I,c,N,m=!0,r=[],d="Only 5 samples per order allowed!";i();function i(){w=$(".samples-detail-wrapper .samples-detail").length,$(".samples-tab .samples-tab-count").text(w),N=5-w,$(".samples-text.count .count-val").text(N),w>0?($(".remove-notice").addClass("hide"),$(".samples-tab").css("display","flex"),$(".samples-cta-wrapper").removeClass("disable"),$(".samples-cta-wrapper .button").css("pointer-events","auto")):(r=[],$(".remove-notice").removeClass("hide"),$(".samples-tab").css("display","none"),$(".samples-cta-wrapper").addClass("disable"),$(".samples-cta-wrapper .button").css("pointer-events","none"))}function l(){m==!0&&($(".samples-detail.trim").appendTo($(".samples-detail-wrapper")),$(".samples-detail.trim .add-trim-samples").css("display","none"),$(".samples-detail.trim").find(".carpet-type").text("Edging Pack"),m=!1),i(),w<5?jQuery.inArray(sampleID,r)>=0?alert(C+" "+x+" has already been added."):($(".samples-detail-wrapper").prepend(c),r.push(sampleID)):alert(d),i()}$("#sampleButton").click(function(){C=$(":input[data-feel]:checked").val(),C=="Pattern"&&(thePattern=$(":input[data-pattern]:checked").val(),C=C+" / "+thePattern),x=$(":input[data-colour]:checked").val(),I=$(":input[data-colour]:checked").siblings().children().attr("src"),c="<div class='samples-detail carpet'><div class='samples-image-wrapper'><img src='"+I+"' class='samples-image' alt=''></div><div class='samples-name-wrapper'><div class='samples-name'><div class='carpet-type'>"+C+"</div><div class='carpet-colour'>"+x+"</div></div><div class='remove-samples'><div class='remove-icon'><div class='icon-bar'></div></div></div></div></div>",theFeelID=C.replace(/ /g,"").toLowerCase(),theColorID=x.replace(/ /g,"").toLowerCase(),sampleID=theFeelID+"-"+theColorID,l(),i(),$(".samples-tab").click(),$(".samples-tab").css("display","flex")}),$(".samples-detail.trim").on("click",".remove-samples",function(){$(this).css("display","none"),$(this).parent(".samples-detail.trim").find(".add-trim-samples").css("display","flex"),$(this).parent(".samples-detail.trim").prependTo($(".trim-garage")),$(this).parent(".samples-detail.trim").find(".carpet-type").text("Add Edging Pack"),i()}),$(".samples-detail.trim").on("click",".add-trim-samples",function(){i(),w<5?($(this).css("display","none"),$(this).parent(".samples-detail.trim").find(".remove-samples").css("display","flex"),$(this).parent(".samples-detail.trim").appendTo($(".samples-detail-wrapper")),$(this).parent(".samples-detail.trim").find(".carpet-type").text("Edging Pack"),i()):alert(d)}),$(".samples-detail-wrapper").on("click",".samples-detail.carpet .samples-name-wrapper .remove-samples",function(){removeFeel=$(this).parents(".samples-name-wrapper").find(".carpet-type").text(),removeColor=$(this).parents(".samples-name-wrapper").find(".carpet-colour").text(),removeFeelID=removeFeel.replace(/ /g,"").toLowerCase(),removeColorID=removeColor.replace(/ /g,"").toLowerCase(),removeID=removeFeelID+"-"+removeColorID,r=jQuery.grep(r,function(p){return p!=removeID}),$(this).parents(".samples-detail-wrapper .samples-detail.carpet").fadeOut(200,function(){$(this).remove(),i()}),i()})});$("#checkoutButton").click(function(){$(this).text("Please wait..."),fe()});function fe(){setTimeout(function(){$(".samples-detail.carpet").remove(),$(".field-label").css("opacity","1"),$("#checkoutButton").text("Order for R95"),$(".remove-notice").removeClass("hide"),$(".samples-cart .samples-close").click(),$(".samples-tab").css("display","none"),$(".samples-cta-wrapper").addClass("disable"),$(".samples-cta-wrapper .button").css("pointer-events","none"),sampleArray=[]},7e3)}var re=ShopifyBuy.buildClient({domain:"yudu2020.myshopify.com",storefrontAccessToken:"4a0e78fe19caee70a369f98925b4a317"}),ke=document.querySelector("#checkoutButton");ke.addEventListener("click",j=>{re.checkout.create().then(async w=>{let C="https://yudu-server.herokuapp.com/yudu-sample-rug-api",x=document.querySelectorAll(".samples-detail-wrapper .samples-detail"),I="95";if(x){let c="";x.forEach(i=>{let l=i.children[1].children[0].children[0].innerHTML,p=i.children[1].children[0].children[1].innerHTML;c.length<1?c=l+" / "+p:c+=" / "+l+" / "+p});let m={method:"POST",body:JSON.stringify({variantString:c,price:I}),headers:{"Content-Type":"Application/JSON"}},d=[{variantId:(await fetch(C,m).then(i=>i.json())).id,quantity:1}];re.checkout.addLineItems(w.id,d).then(i=>{window.open(i.webUrl)})}})});})();
