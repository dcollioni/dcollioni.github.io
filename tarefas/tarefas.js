var _campoDescricao, _ulTarefas;
var tarefas = new Array();

function carregarElementos() {
	_campoDescricao = document.getElementById("descricao");
	_ulTarefas = document.getElementById("tarefas");
}

function adicionarTarefa() {
	var descricao = _campoDescricao.value;

	if (descricao.length === 0) {
		return false;
	}

	tarefas.push(descricao);
	mostrarTarefas();
	_ulTarefas.lastChild.className = "adicionado";

	_campoDescricao.value = "";
	_campoDescricao.focus();

	return false;
}

function removerTarefa() {
	tarefas.pop();

	_ulTarefas.lastChild.className = "removido";

	setTimeout(mostrarTarefas, 1000);
}

function mostrarTarefas() {
	_ulTarefas.innerHTML = "";
	for (var i in tarefas) {
		_ulTarefas.innerHTML += "<li>" + tarefas[i] + "</li>";
	}
}