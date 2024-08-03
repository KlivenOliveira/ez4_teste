//calendario//
//var input_contexto = $('#input_contexto').val() 


var principal =  $('#solicitacao').val()
$(document).ready(function () {
if(numeroAtividadeAtual >0 && numeroAtividadeAtual !=25  && numeroAtividadeAtual !=5 ){

	$('#input_contexto').prop('readonly',true),
	$('#input_tamanho').prop('readonly',true),
	$('#input_tamanho').prop('readonly',true),
	$('#sct_veiculacao').prop('disabled',true),
	$('#input_dta').prop('readonly',true),
	$('#input_area').prop('readonly',true),
	$('#Direcionamento_da_comunicao').prop('disabled',true),
	$('#sct_veiculacao').prop('readonly',true);
	
	
	if(numeroAtividadeAtual == 6  || numeroAtividadeAtual == 25  ||  numeroAtividadeAtual == 27 || numeroAtividadeAtual == 32 || numeroAtividadeAtual == 36 || numeroAtividadeAtual == 49 ){
		$('#decisao_oculto').val('2')
		
	}}
	validaFinal()

})


function apagar_validar_tamanho(){
	$('#input_tamanho').val('')

}



function validaForms(){
   console.log('passei aqui')
    const aCamposObgr = ["input_contexto","sct_veiculacao","input_dta","input_area","Direcionamento_da_comunicao"]
    const labels = new Array()
    let trigger = false

    for (i = 0; i<aCamposObgr.length;i++){
        const field = $('#'+aCamposObgr[i])
        let label = $('#'+aCamposObgr[i]+'_l');

        if(field.val() == '' || field.val() ==null){
            var labelText = label.text();
            field.addClass('erro_vazio')
        //    labelText.indexOf("*") >= 0 ? labelText.replace("*", "") : labelText;
            if(labels.indexOf(labelText)=== -1) labels.push(labelText);
                trigger = true
            
			}
		}
	
		if (labels.length > 0) {
			let li;
			for (let k = 0; k < labels.length; k++) {
				li +=
					"<li class='list-group-item gray-text'><strong style=color:#dc3545>" +
					labels[k] +
					"</strong></li>";
			}
			li = li.replace(undefined, "");
			let ul = "<ul class='list-group list-group-flush'>" + li + "</ul>";

			if(numeroAtividadeAtual == 6  || numeroAtividadeAtual == 25  ||  numeroAtividadeAtual == 27 || numeroAtividadeAtual == 32 || numeroAtividadeAtual == 36 || numeroAtividadeAtual == 49 ){
			if($('#decisao_oculto').val() == 2){
				li +="<li class='list-group-item gray-text'><strong style=color:#dc3545>"+"Selecione uma aprovação"+ 
					"</strong></li>";
				 ul = "<ul class='list-group list-group-flush'>" + li + "</ul>";
			}}

			 if($('#solicitacao').val() =='interna')
				{
				 if( $('#input_tamanho').val() ==''){
				li +="<li class='list-group-item gray-text'><strong style=color:#dc3545>"+"Tamanho"+ 
					"</strong></li>";
				 ul = "<ul class='list-group list-group-flush'>" + li + "</ul>";
			}
			else if($('#solicitacao').val() =='externa'){
				li -="<li class='list-group-item gray-text'><strong style=color:#dc3545>"+"Tamanho"+ 
				"</strong></li>";
			    ul = "<ul class='list-group list-group-flush'>" + li + "</ul>"
			}
				
			}
			
			if (trigger) {
				FLUIGC.toast({
					title: "Atenção: ",
					message: "Preencher os campos: <br />" + ul,
					type: "danger",
				});
				return false;
						}
    }
}




function validaFinal(){
	var UltimaDiv =  $('#ultimaDiv');
	var carimbo = $("<button></button>")
	var decisao = $('#decisao_oculto').val()	
    if (numeroAtividadeAtual == 4 && decisao == 1 ){
        UltimaDiv.append(carimbo)
        carimbo.text('O processo foi reprovado')
        carimbo.addClass('btn btn-danger btn-lg btn-block btn-sem_cursor')
    }


    if (numeroAtividadeAtual == 4 && decisao == 0 ){{
        UltimaDiv.append(carimbo)
        carimbo.text('O processo foi Aprovado')
        carimbo.addClass('btn btn-success btn-lg btn-block btn-sem_cursor')
    }

    return carimbo
}
}




function addHide() {
	console.log("FUNCIONANDO")
	var selecionado = $("#solicitacao").val()
	if (selecionado == "externa") {
		$("#panel-body").show();
		$('#text_titulo').text('Painel de comunicação externa')
		$("#tamanho").hide();
		$('#input_tamanho').val('')
		$('#input_tamanho').text('')
	} else if (selecionado == "interna") {
		$("#panel-body").show();
		$('#text_titulo').text('Painel de comunicação interna')
		$("#tamanho").show();
	
}
}
function receberValor(decisao){
	console.log(decisao)
	$('#decisao_oculto').val(decisao)
	if( decisao == 1){
		FLUIGC.toast({
			title: 'Reprovacao' ,
			message: 'Processo sera reprovado',
			type: 'danger'
			});
	}

	else if(decisao == 0 ) {
		 FLUIGC.toast({
			title: 'Aprovação' ,
			message: 'Processo sera aprovado',
			type: 'success'
			})
		}else if(decisao == 3){
			FLUIGC.toast({
				title: 'Alteração' ,
				message: 'Processo voltara para alteração',
				type: 'Warning'
				})
		}
	}




/*
function seVazio(){
	if(input_contexto = ""){
	$('#erro_contexto').show()
	}
}


$('#input_contexto').on( "blur", function() {
	alert( "Handler for `blur` called." );
  } );

*/





/*
var msg="";
if (input_contexto  == ""){
		msg += "Campo contexto não foi preenchido";
	}

if (msg !="") {
	   throw FLUIGC.toast({
	   title: 'Erro: ',
	   message: msg,
	   type: 'danger'
	   });
	   }

*/
	   /*
if(form.getValue("veiculacao")==""){
	 msg +="    Campo veiculacao não foi preenchido" ;
} 

if(form.getValue("input_dta")==""){
	msg +=" Campo data não foi preenchido";
} 

if(form.getValue("input_area")==""){
msg +=" Campo area não foi preenchido";
} 
}
*/
