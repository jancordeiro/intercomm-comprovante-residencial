function validarCampos() {            
	var cpf = document.getElementById("cpf").value;
	
	// Verifica se todos os campos estão preenchidos
	if (cpf) {
		if (validarCPF(cpf)) {
			exibirDados();
		} else {
			alert("CPF inválido. Por favor, verifique o número do CPF.");
		}
	} else {
		alert("Por favor, preencha todos os campos.");
	}
}

function validarCPF(cpf) {
	// Remove caracteres não numéricos
	cpf = cpf.replace(/\D/g, '');
	
	// Verifica se o CPF tem 11 dígitos
	if (cpf.length !== 11) {
		return false;
	}
	
	// Verifica se o CPF não possui todos os dígitos iguais (ex. 111.111.111-11)
	if (/^(\d)\1+$/.test(cpf)) {
		return false;
	}
	
	// Cálculo para verificar a validade do CPF
	var soma = 0;
	var resto;
	
	for (var i = 1; i <= 9; i++) {
		soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
	}
	
	resto = (soma * 10) % 11;
	
	if (resto === 10 || resto === 11) {
		resto = 0;
	}
	
	if (resto !== parseInt(cpf.charAt(9))) {
		return false;
	}
	
	soma = 0;
	
	for (var i = 1; i <= 10; i++) {
		soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
	}
	
	resto = (soma * 10) % 11;
	
	if (resto === 10 || resto === 11) {
		resto = 0;
	}
	
	if (resto !== parseInt(cpf.charAt(10))) {
		return false;
	}
	
	return true;
}

function exibirDados() {
	var nome = document.getElementById("nome").value;
	var cpf = document.getElementById("cpf").value;
	var endereco = document.getElementById("endereco").value;
	var numero = document.getElementById("numero").value;
	var bairro = document.getElementById("bairro").value;
	var cidade = document.getElementById("cidade").value;
	
	if (nome && cpf && endereco && numero && bairro && cidade) {
	// Exibe os dados na página
		document.getElementById("nomeCadastrado").textContent = nome;
		document.getElementById("cpfCadastrado").textContent = cpf;
		document.getElementById("enderecoCadastrado").textContent = endereco;
		document.getElementById("numeroCadastrado").textContent = numero;
		document.getElementById("bairroCadastrado").textContent = bairro;
		document.getElementById("cidadeCadastrado").textContent = cidade;
		
		// Mostra a seção de dados cadastrados
		document.getElementById("dadosCadastrados").style.display = "flex";
		document.getElementById("main").style.display = "none";
	} else {
		alert("Por favor, preencha todos os campos!");
	}
}
