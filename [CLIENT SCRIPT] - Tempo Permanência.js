function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var bolsa = g_form.getValue('tipo_de_bolsa');
    var anos = '';
    if (bolsa == 'tecnico' || bolsa == 'graduacao') {
        anos = '2';
    } else if (bolsa == 'pos_graduacao') {
        anos = '3';
    } else if (bolsa == 'mestrado' || bolsa == 'doutorado') {
        anos = '4';
    }
    var ga = new GlideAjax('AA_Generico');
    ga.addParam('sysparm_name', 'addYears');
    ga.addParam('sysparm_date', g_form.getValue("data_fim_do_beneficio"));
    ga.addParam('sysparm_years', anos);
    ga.getXML(getdays);
}

function getdays(response) {

    var answer = response.responseXML.documentElement.getAttribute("answer");
    var partes = answer.split('-');
    var ano = partes[0];
    var mes = String(partes[1]).padStart(2, '0'); // Adicionar zero à esquerda se necessário
    var diaHora = partes[2].split(' '); // Dividir o terceiro elemento em dia e hora
    var dia = String(diaHora[0]).padStart(2, '0'); // Dia
    var horaMinutoSegundo = diaHora[1]; // Hora
    // Montar a data no formato desejado
    var dataFormatada = dia + '/' + mes + '/' + ano + ' ' + horaMinutoSegundo;
    g_form.setValue('tempo_de_permanencia', dataFormatada);

}