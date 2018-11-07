
function calculate(){
   
   var dikadi= document.getElementById("dikadi").value;
   var wataadi= document.getElementById("wataadi").value;
   var incorrect=0;
   if(dikadi=="" || wataadi ==""){
   incorrect =1;
   }
   if(incorrect==0){
   
   document.getElementById("dikadi").value =" ";
   document.getElementById("wataadi").value =" ";
   document.getElementById("dikadi").focus();
   
   var nul=wataadi * wataadi * dikadi / 2304 ;
   nul=nul*144;
   var nadi=nul - (nul%144);
   var adi=nadi/144;
   var nagal=(nul-nadi)-(nul-nadi)%12;
   var agal =nagal/12;
   var pnul="";
   var nnul=nul - nadi - nagal;
   if (nul<150){
   pnul="  නූල් : "+nnul;

   
   }
   var mes=document.getElementById("result");
   mes.innerHTML ="<div>දික් අඩි : "+dikadi+ " &nbsp වට අගල් : " +wataadi + "</div><div>කියුබික් ප්‍රමානය -: <br> අඩි : "+adi+" &nbsp  අගල් : "+agal+" "+pnul+ "</div> ";
   var tt=adi+"  -   "+agal;
   var tom=parseInt(adi) * 12 + parseInt(agal);
   
   strset(dikadi, wataadi,tt,tom);
   addbill();
   
   
}
    


}
function addbill(){
	echeck();
	var basehtml="<thead><tr><th>No.</th><th>දික් අඩි</th><th>වට ප්‍රමානය අගල්</th><th>කියුබික් අඩි ප්‍රමානය</th></tr></thead><tbody ></tbody>";
	var bele=document.getElementById("bill");
	bele.innerHTML =basehtml;
	//$("tbody"). children().remove();
	
	if(typeof(storage) !== "undefiend" ){
	sessionStorage.setItem("tmp","t");
	
	var tdata= strget();
	var idlist=tdata[0];
	//alert(sessionStorage.getItem("tmp")+"no data. "+idlist);
	}
	else{
		alert("no support");
	}
	var dalist=tdata[1];
	var walist=tdata[2];
	var tlist=tdata[3];
	
	for (j=0; j<tdata[4] ; j++){
	i=j+1;
	var table = document.getElementById("bill");
	
	var lengh=table.rows.length;
	var row =table.insertRow(i);
	var c1=row.insertCell(0);
	var c2=row.insertCell(1);
	var c3=row.insertCell(2);
	var c4=row.insertCell(3);
	c1.innerHTML=i;
	c2.innerHTML=dalist[i];
	c3.innerHTML=walist[i];
	c4.innerHTML=tlist[i];
	var t1 = parseInt(tdata[5]);
	var t2 = t1 - (t1%12);
	t2 =t2/12;
	var t3 = t1%12;
	
	var basetot="<div>මුලු කියුබික් ප්‍රමානය  -:  අඩි - "+t2+"   අගල් - "+t3+"</div>  ";
	document.getElementById("tot").innerHTML=basetot;
		echeck();
	}
	}
function strget(){
	if(sessionStorage.getItem("dalist") !== null){
	var idlist=sessionStorage.getItem("idlist");
	var dalist=sessionStorage.getItem("dalist").split(",");
	var walist=sessionStorage.getItem("walist").split(",");
	var tlist=sessionStorage.getItem("tlist").split(",");
	var length = sessionStorage.getItem("length");
	length=parseInt(length);
	var tom=sessionStorage.getItem("total");
	tom=parseInt(tom);
	return [idlist,dalist,walist,tlist,length,tom]; 
	//return [idlist];
	
	}
	else{
		return [" "," "," "," ",0,0];
		}
	}
function strset(da,wa,t,tom){
	var tdata=strget();
	var idlist=tdata[0];
	var dalist=tdata[1];
	var walist=tdata[2];
	var tlist=tdata[3];
	var l=tdata[4]
	tom =parseInt(tdata[5]) + tom;
	if(l==null){
		l=0 ;
		}
	idlist=idlist +","+ l;
	dalist=dalist +","+da;
	walist=walist+","+wa;
	tlist=tlist+","+t;
	length=l+1;
	sessionStorage.setItem("idlist",idlist);
	sessionStorage.setItem("dalist",dalist);
	sessionStorage.setItem("walist",walist);
	sessionStorage.setItem("tlist",tlist);
	sessionStorage.setItem("length",length);
	sessionStorage.setItem("total",tom);
	
}
function clearlast(){
var dalist=sessionStorage.getItem("dalist").split(",");
	var walist=sessionStorage.getItem("walist").split(",");
	var tlist=sessionStorage.getItem("tlist").split(",");
	var length = sessionStorage.getItem("length");
    var total =sessionStorage.getItem("total");
 var tdalist=[];
var twalist=[];
var ttlist=[];

	
	
for(i=0;i<(dalist.length-1);i++){
 tdalist[i]=dalist[i];
 twalist[i]=walist[i];
 ttlist[i]=tlist[i];
var tlength=parseInt(length)-1;

}
var tmp1=tlist[(tlist.length -1)];
var tmp2=tmp1.split("-");
var a1=parseInt(tmp2[0]) * 12;
var a2=parseInt(tmp2[1]) + a1;
total=total-a2;
sessionStorage.clear();

addbill();	
	
sessionStorage.setItem("dalist",tdalist);
	sessionStorage.setItem("walist",twalist);
	sessionStorage.setItem("tlist",ttlist);
	sessionStorage.setItem("length",tlength);
	sessionStorage.setItem("total",total);

var bele=document.getElementById("bill");
	bele.innerHTML ="";
	
addbill();

}
function echeck(){
	var dat=strget();
	var btn =document.getElementById("clast");
	var btn2 =document.getElementById("edit_input_btn_main");
	
	var tot = document.getElementById("tot");
	if (dat[4] == null || dat[4] ==0){
		$(btn2).slideUp(500);
		$(btn).slideUp(600);
		//btn.style.visibility = "hidden";
		tot.innerHTML ="";
		//btn2.style.display="none";
	}else{
		$(btn).slideDown(500);
		
		//btn.style.visibility="visible";
		$(btn2).slideDown(500);
		//btn2.style.display="inline";
	}
	
}
	function mathscalc(watadi,dikadi){
	watadi =parseInt(watadi);
	dikadi=parseInt(dikadi);
	
var nul=watadi * watadi * dikadi / 2304 ;
   nul=nul*144;
   var nadi=nul - (nul%144);
   var adi=nadi/144;
   var nagal=(nul-nadi)-(nul-nadi)%12;
   var agal =nagal/12;
   var pnul="";
   var nnul=nul - nadi - nagal;
   if (nul<150){
   pnul="  නූල් : "+nnul;
   }
var tt=adi+"  -   "+agal;
		
   var tom=parseInt(adi) * 12 + parseInt(agal);
   
   return [dikadi, watadi,tt,tom];
   
}
function edit_more_click(){
	var edit_container=document.getElementById("edit_container");
	var edit_input_txt_id = document.getElementById("edit_input_txt_id");
	var edit_input_txt_dikadi = document.getElementById("edit_input_txt_dikadi");
	var edit_input_txt_watadi = document.getElementById("edit_input_txt_watadi");
	var edit_input_btn_confirm = document.getElementById("edit_input_btn_confirm");
	var edit_input_btn_cancel = document.getElementById("edit_input_btn_cancel");
	var input_btn_clast = document.getElementById("clast");
	//edit_container.style.display="block";
	edit_input_txt_id.style.display ="block";
	edit_input_txt_dikadi.style.display ="block";
	edit_input_txt_watadi.style.display="block";
	edit_input_btn_confirm.style.display="inline";
	edit_input_btn_cancel.style.display="inline";
	//input_btn_clast.style.visibility="hidden";
	$(input_btn_clast).slideUp(300);
	$(edit_container).slideDown(500);
	document.getElementById("edit_input_btn_main").style.display="none";
	}
	function edit_cancel(){
		var edit_input_txt_id = document.getElementById("edit_input_txt_id");
	var edit_input_txt_dikadi = document.getElementById("edit_input_txt_dikadi");
	var edit_input_txt_watadi = document.getElementById("edit_input_txt_watadi");
	var edit_input_btn_confirm = document.getElementById("edit_input_btn_confirm");
	var edit_input_btn_cancel = document.getElementById("edit_input_btn_cancel");
	var input_btn_clast = document.getElementById("clast");
		edit_input_txt_id.style.display ="none";
	edit_input_txt_dikadi.style.display ="none";
	edit_input_txt_watadi.style.display="none";
	edit_input_btn_confirm.style.display="none";
	edit_input_btn_cancel.style.display="none";
	//input_btn_clast.style.visibility="visible";
	
	var edit_container=document.getElementById("edit_container");
	//edit_container.style.display="none";
	$(edit_container).slideUp(500);	
	edit_input_txt_dikadi.value="";
	edit_input_txt_watadi.value="";
	edit_input_txt_id.value="";	
	echeck();	
		}
function edit_data(){
	var edit_input_txt_id = document.getElementById("edit_input_txt_id");
	var edit_input_txt_dikadi = document.getElementById("edit_input_txt_dikadi");
	var edit_input_txt_watadi = document.getElementById("edit_input_txt_watadi");
	var edit_input_btn_confirm = document.getElementById("edit_input_btn_confirm");
	var edit_input_btn_cancel = document.getElementById("edit_input_btn_cancel");
	var input_btn_clast = document.getElementById("clast");
	if(validate_data(1,edit_input_txt_id)==1 && validate_data(1,edit_input_txt_dikadi)==1 && validate_data(1,edit_input_txt_watadi)==1){
		var tmp_data = mathscalc(edit_input_txt_dikadi.value,edit_input_txt_watadi.value);
		var tmp_data2 = strget();
		var index = parseInt(edit_input_txt_id.value);
		var tlist = tmp_data2[3];
		var tmp1=tlist[index];
	    var total =sessionStorage.getItem("total");
		var tmp2=tmp1.split("-");
        var a1=parseInt(tmp2[0]) * 12;
        var a2=parseInt(tmp2[1]) + a1;
        total=total-a2;
        var dalist=tmp_data2[1];
        var walist=tmp_data2[2];
	    var tlist=tmp_data2[3];
	     dalist[index]=edit_input_txt_dikadi.value;
	     walist[index]=edit_input_txt_watadi.value;
	     tlist[index]=tmp_data[2];
	     total=total+parseInt(tmp_data[3]);
          sessionStorage.setItem("dalist",dalist);
	sessionStorage.setItem("walist",walist);
	sessionStorage.setItem("tlist",tlist);
	sessionStorage.setItem("total",total);
		console.log(total);
		edit_cancel();
	   addbill();
	   echeck();
	}
	
	}
	
	function validate_data(type , value){
		var correct = 0;
		value = value.value;
		var isnum =/^\d+$/.test(value);
		if (type == 1){
			if(value==null || value =="" ){
				correct =0;
			}else if(isnum=true){
				correct =1;
				}
		
		
		}
		return correct;
         }
		
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate after type ] */
    $('.validate-input .input100').each(function(){
        $(this).on('blur', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })  
	  $(this).on('focus', function(){
            hideValidate(this);
           $(this).parent().removeClass('true-validate');
        })
        })  ;
 
  
  
    /*==================================================================
    [ Validate ]*/
    
    var input = $('.validate-input .input100');

  /*  $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        
    }); */


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });
    $("input[onClick='calculate ()']").each(function (){
	    $(this).click(function () {
		    var ok=true;
	    for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                ok = false;
            }}
		    if(ok=true){
            for(var i=0; i<input.length;i++){
		    hideValidate(input[i]);
                  $(input[i]).parent().removeClass('true-validate');
	    }   } 
        });
	});
	$("#edit_input_btn_confirm").click(function () {
	var input2=[$("#edit_input_txt_dikadi") , $("#edit_input_txt_watadi") , $("#edit_input_txt_id") ];
	for(var i=0; i<input2.length; i++) {
            if(validate(input2[i]) == false){
                showValidate(input2[i]);
                
            }}	
	if(validate(input2[0]) != false && validate(input2[1]) != false && validate(input2[2]) != false ){	
         for(var i=0; i<input2.length; i++) {
		 hideValidate(input2[i]);
           $(input2[i]).parent().removeClass('true-validate');
		 }
	}	
	});	
     function validate (input) {
	     var inval = $(input).val();
	     var check =/^\d+\$/.test(inval)
        if(check= false){
		return false;
	}	
        else {
            if($(input).val().trim() == ''){
                return false;
            }
		if($(input).attr("id")=="edit_input_txt_id"){
			var length = sessionStorage.getItem("length");
		if(parseInt($(input).val()) > parseInt(length)){
                return false;
                
            }
		}	
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');

        $(thisAlert).append('<span class="btn-hide-validate">&#xf136;</span>')
        $('.btn-hide-validate').each(function(){
            $(this).on('click',function(){
               hideValidate(this);
            });
        });
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
        $(thisAlert).find('.btn-hide-validate').remove();
    }
    

    /*==================================================================
    [ Show / hide contact ] 
    $('.btn-hide-contact100').on('click', function(){
        $('.container-contact100').fadeOut(300);
    });

    $('.btn-show-contact100').on('click', function(){
        $('.container-contact100').fadeIn(300);
    });
    */
})(jQuery);
