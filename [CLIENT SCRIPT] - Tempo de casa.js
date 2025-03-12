function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}

	//var admissao = g_form.getReference('selecione_colaborador',u_admission_date); não sei pq n funciona...
		
	var colab = g_form.getValue('colaborador');
	var gr = new GlideRecord('sys_user');
	gr.get(colab);
	var admissao = gr.u_admission_date;
	var ga = new GlideAjax('AA_Generico');
	ga.addParam('sysparm_name','getCompanyTime');
	ga.addParam('sysparm_admissao', admissao);
	ga.getXML(infoFunction);

	function infoFunction(response){
		var tempoCasa = response.responseXML.documentElement.getAttribute("answer");
		if(tempoCasa){
			g_form.setValue('tempo_de_empresa',tempoCasa);
		}
	}
}