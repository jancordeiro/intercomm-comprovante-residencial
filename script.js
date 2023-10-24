function exibirDados() {
	var nome = document.getElementById("nome").value;
	var cpf = document.getElementById("cpf").value;
	var endereco = document.getElementById("endereco").value;
	var numero = document.getElementById("numero").value;
	var bairro = document.getElementById("bairro").value;
	
	// Exibe os dados na página
	document.getElementById("nomeCadastrado").textContent = nome;
	document.getElementById("cpfCadastrado").textContent = cpf;
	document.getElementById("enderecoCadastrado").textContent = endereco;
	document.getElementById("numeroCadastrado").textContent = numero;
	document.getElementById("bairroCadastrado").textContent = bairro;	
	
	// Mostra a seção de dados cadastrados
	document.getElementById("dadosCadastrados").style.display = "flex";
	document.getElementById("main").style.display = "none";			
}