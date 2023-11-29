function inverter() {
	var texto = cx.value;
	var tmp = "";
	for (var i = texto.length; i >= 0; i--)
		tmp = tmp+texto.charAt(i);
	cx.value = tmp;
}