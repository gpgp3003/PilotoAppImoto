function cpfmask(field){
	var cpf = $('#' + field).val();
	cpf = cpf.replace(/[^0-9]/gi, '');
	//cpf = cpf.replace(/\./g, '');
	//cpf = cpf.replace(/-/g, '');
	//cpf = cpf.replace(/\//g, '');
	//cpf = cpf.replace(/ /g, '');
	var tamStr = cpf.length;
	if (tamStr==0) {
		$('#' + field).val('');
	}
    if (tamStr==1) {
    	$('#' + field).val(cpf + '  .   .   -');
    	$('#' + field).setCursorPosition(1);
    } 
    if (tamStr==2) {
    	$('#' + field).val(cpf + ' .   .   -');
    	$('#' + field).setCursorPosition(2);
    }
    if (tamStr==3) {
    	$('#' + field).val(cpf + '.   .   -');
    	$('#' + field).setCursorPosition(3);
    }
    if (tamStr==4) {
    	$('#' + field).val(cpf.substr(0, 3) + '.' + cpf.substr(-1) + '  .   -');
    	$('#' + field).setCursorPosition(5);
    }
    if (tamStr==5) {
    	$('#' + field).val(cpf.substr(0, 3) + '.' + cpf.substr(-2) + ' .   -');
    	$('#' + field).setCursorPosition(6);
    }
    if (tamStr==6) {
    	$('#' + field).val(cpf.substr(0, 3) + '.' + cpf.substr(-3) + '.   -');
    	$('#' + field).setCursorPosition(7);
    }
    if (tamStr==7) {
    	$('#' + field).val(cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(-1) + '  -');
    	$('#' + field).setCursorPosition(9);
    }
    if (tamStr==8) {
    	$('#' + field).val(cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(-2) + ' -');
    	$('#' + field).setCursorPosition(10);
    }
    if (tamStr==9) {
    	$('#' + field).val(cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(-3) + '-');
    	$('#' + field).setCursorPosition(11);
    }
    if (tamStr==10) {
    	$('#' + field).val(cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(6, 3) + '-' + cpf.substr(-1));
    	$('#' + field).setCursorPosition(13);
    }
    if (tamStr==11) {
    	$('#' + field).val(cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(6, 3) + '-' + cpf.substr(-2));
    	$('#' + field).setCursorPosition(14);
    }
    if (tamStr==12) {
    	$('#' + field).val(cpf.substr(0, 2) + '.' + cpf.substr(2, 3) + '.' + cpf.substr(5, 3) + '/' + cpf.substr(-4) + '-');
    	$('#' + field).setCursorPosition(15);
    }
    if (tamStr==13) {
    	$('#' + field).val(cpf.substr(0, 2) + '.' + cpf.substr(2, 3) + '.' + cpf.substr(5, 3) + '/' + cpf.substr(8, 4) + '-' + cpf.substr(-1));
    	$('#' + field).setCursorPosition(17);
    }
    if (tamStr>=14) {
    	$('#' + field).val(cpf.substr(0, 2) + '.' + cpf.substr(2, 3) + '.' + cpf.substr(5, 3) + '/' + cpf.substr(8, 4) + '-' + cpf.substr(12,2));
    	$('#' + field).setCursorPosition(18);
    }
}

function telmask(field){
	var tel = $('#' + field).val();
	tel = tel.replace(/[^0-9]/gi, '');
	var tamStr = tel.length;
	if (tamStr==0) {
		$('#' + field).val('');
	}
	if (tamStr==1) {
    	$('#' + field).val('(' + tel + ')-');
    	$('#' + field).setCursorPosition(2);
    }
	if (tamStr==2) {
    	$('#' + field).val('(' + tel + ')-');
    	$('#' + field).setCursorPosition(3);
    }
	if (tamStr==3) {
    	$('#' + field).val('(' + tel.substr(0, 2) + ')' + tel.substr(-1) + '-');
    	$('#' + field).setCursorPosition(5);
    }
	if (tamStr==4) {
    	$('#' + field).val('(' + tel.substr(0, 2) + ')' + tel.substr(-2) + '-');
    	$('#' + field).setCursorPosition(6);
    }
	if (tamStr==5) {
    	$('#' + field).val('(' + tel.substr(0, 2) + ')' + tel.substr(-3) + '-');
    	$('#' + field).setCursorPosition(7);
    }
	if (tamStr==6) {
    	$('#' + field).val('(' + tel.substr(0, 2) + ')' + tel.substr(-4) + '-');
    	$('#' + field).setCursorPosition(8);
    }
	if (tamStr==7) {
    	$('#' + field).val('(' + tel.substr(0, 2) + ')' + tel.substr(2, 4) + '-' + tel.substr(-1));
    	$('#' + field).setCursorPosition(10);
    }
	if (tamStr==8) {
    	$('#' + field).val('(' + tel.substr(0, 2) + ')' + tel.substr(2, 4) + '-' + tel.substr(-2));
    	$('#' + field).setCursorPosition(11);
    }
	if (tamStr==9) {
    	$('#' + field).val('(' + tel.substr(0, 2) + ')' + tel.substr(2, 4) + '-' + tel.substr(-3));
    	$('#' + field).setCursorPosition(12);
    }
	if (tamStr==10) {
    	$('#' + field).val('(' + tel.substr(0, 2) + ')' + tel.substr(2, 4) + '-' + tel.substr(-4));
    	$('#' + field).setCursorPosition(13);
    }
	if (tamStr>=11) {
    	$('#' + field).val('(' + tel.substr(0, 2) + ')' + tel.substr(2, 5) + '-' + tel.substr(7,4));
    	$('#' + field).setCursorPosition(14);
    }
}

function cepmask(field){
	var cep = $('#' + field).val();
	cep = cep.replace(/[^0-9]/gi, '');
	var tamStr = cep.length;
	if (tamStr==0) {
		$('#' + field).val('');
	}
	if (tamStr==1) {
    	$('#' + field).val(cep + '    -');
    	$('#' + field).setCursorPosition(1);
    }
	if (tamStr==2) {
    	$('#' + field).val(cep + '   -');
    	$('#' + field).setCursorPosition(2);
    }
	if (tamStr==3) {
    	$('#' + field).val(cep + '  -');
    	$('#' + field).setCursorPosition(3);
    }
	if (tamStr==4) {
    	$('#' + field).val(cep + ' -');
    	$('#' + field).setCursorPosition(4);
    }
	if (tamStr==5) {
    	$('#' + field).val(cep + '-');
    	$('#' + field).setCursorPosition(5);
    }
	if (tamStr==6) {
    	$('#' + field).val(cep.substr(0, 5) + '-' + cep.substr(-1));
    	$('#' + field).setCursorPosition(7);
    }
	if (tamStr==7) {
    	$('#' + field).val(cep.substr(0, 5) + '-' + cep.substr(-2));
    	$('#' + field).setCursorPosition(8);
    }
	if (tamStr>=8) {
    	$('#' + field).val(cep.substr(0, 5) + '-' + cep.substr(5, 3));
    	$('#' + field).setCursorPosition(9);
    }
}

//SET CURSOR POSITION
$.fn.setCursorPosition = function(pos) {
  this.each(function(index, elem) {
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  });
  return this;
};

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}

function cpfmaskstr(cpf){
    cpf = cpf.replace(/[^0-9]/gi, '');
    //cpf = cpf.replace(/\./g, '');
    //cpf = cpf.replace(/-/g, '');
    //cpf = cpf.replace(/\//g, '');
    //cpf = cpf.replace(/ /g, '');
    var cpfmasked = '';
    var tamStr = cpf.length;
    if (tamStr==0) {
        cpfmasked = '';
    }
    if (tamStr==1) {
        cpfmasked = cpf + '  .   .   -';
    } 
    if (tamStr==2) {
        cpfmasked = cpf + ' .   .   -';
    }
    if (tamStr==3) {
        cpfmasked = cpf + '.   .   -';
    }
    if (tamStr==4) {
        cpfmasked = cpf.substr(0, 3) + '.' + cpf.substr(-1) + '  .   -';
    }
    if (tamStr==5) {
        cpf.substr(0, 3) + '.' + cpf.substr(-2) + ' .   -';
    }
    if (tamStr==6) {
        cpfmasked = cpf.substr(0, 3) + '.' + cpf.substr(-3) + '.   -';
    }
    if (tamStr==7) {
        cpfmasked = cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(-1) + '  -';
    }
    if (tamStr==8) {
        cpfmasked = cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(-2) + ' -';
    }
    if (tamStr==9) {
        cpfmasked = cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(-3) + '-';
    }
    if (tamStr==10) {
        cpfmasked = cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(6, 3) + '-' + cpf.substr(-1);
    }
    if (tamStr==11) {
        cpfmasked = cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(6, 3) + '-' + cpf.substr(-2);
    }
    if (tamStr==12) {
        cpfmasked = cpf.substr(0, 2) + '.' + cpf.substr(2, 3) + '.' + cpf.substr(5, 3) + '/' + cpf.substr(-4) + '-';
    }
    if (tamStr==13) {
        cpfmasked = cpf.substr(0, 2) + '.' + cpf.substr(2, 3) + '.' + cpf.substr(5, 3) + '/' + cpf.substr(8, 4) + '-' + cpf.substr(-1);
    }
    if (tamStr>=14) {
        cpfmasked = cpf.substr(0, 2) + '.' + cpf.substr(2, 3) + '.' + cpf.substr(5, 3) + '/' + cpf.substr(8, 4) + '-' + cpf.substr(12,2);
    }
    return cpfmasked;
}

function cepmaskstr(cep){
    cep = cep.replace(/[^0-9]/gi, '');
    var tamStr = cep.length;
    var cepmasked='';
    if (tamStr==0) {
        cepmasked = '';
    }
    if (tamStr==1) {
        cepmasked = cep + '    -';
    }
    if (tamStr==2) {
        cepmasked = cep + '   -';
    }
    if (tamStr==3) {
        cepmasked = cep + '  -';
    }
    if (tamStr==4) {
        cepmasked = cep + ' -';
    }
    if (tamStr==5) {
        cepmasked = cep + '-';
    }
    if (tamStr==6) {
        cepmasked = cep.substr(0, 5) + '-' + cep.substr(-1);
    }
    if (tamStr==7) {
        cepmasked = cep.substr(0, 5) + '-' + cep.substr(-2);
    }
    if (tamStr>=8) {
        cepmasked = cep.substr(0, 5) + '-' + cep.substr(5, 3);
    }
    return cepmasked;
}