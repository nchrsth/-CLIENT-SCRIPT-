function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
   
    var servico = g_form.getValue('servico'); // pega o valor da variável 'servico'
	g_form.setValue('tipo_requisicao',''); // limpa o valor da variável 'tipo_requisicao'
	g_form.clearOptions('tipo_requisicao'); // limpa as opções adicionadas da variável 'tipo_requisicao'
	g_form.addOption('tipo_requisicao', '', '-- None --'); //adiciona a opção 'none'com o value vazio

	// a variável serviço é uma variável reference da tabela cmdb_ci_service
	// a variável tipo_requisicao é uma select box
	// dependendo do serviço é adicionado as opções 

    if (servico == '8ea1ef4347842a10b678ec40f26d4340') { // Computador
        g_form.addOption('tipo_requisicao', 'Reportar lentidão/barulho/travando', 'Reportar lentidão/barulho/travando');
        g_form.addOption('tipo_requisicao', 'Instalação de programas (softwares)', 'Instalação de programas (softwares)');
        g_form.addOption('tipo_requisicao', 'Configuração de certificado digital', 'Configuração de certificado digital');
        g_form.addOption('tipo_requisicao', 'Falha no Microsoft Onedrive (Sincronismo)', 'Falha no Microsoft Onedrive (Sincronismo)');
        g_form.addOption('tipo_requisicao', 'Verificar e corrigir problema de acessos externos (VPN/NPA)', 'Verificar e corrigir problema de acessos externos (VPN/NPA)');
        g_form.addOption('tipo_requisicao', 'Falha no Microsoft Outlook', 'Falha no Microsoft Outlook');



    } else if (servico == '8cb1e78347842a10b678ec40f26d4373') { // Celular(Mobile)
        g_form.addOption('tipo_requisicao', 'Instalação de aplicativos', 'Instalação de aplicativos');
        g_form.addOption('tipo_requisicao', 'Desinstalação de aplicativos', 'Desinstalação de aplicativos');

    } else if (servico == '57b16f8347842a10b678ec40f26d43cf') { //Coletores
        g_form.addOption('tipo_requisicao', 'Dificuldade no acesso à internet', 'Dificuldade no acesso à internet');

    } else if (servico == 'c9c1a3c347842a10b678ec40f26d4322') { // Telefonia
        g_form.addOption('tipo_requisicao', 'Solicitação de novo ramal', 'Solicitação de novo ramal');
        g_form.addOption('tipo_requisicao', 'Manutenção de ramal (Correções/Mudanças)', 'Manutenção de ramal (Correções/Mudanças)');

    } else if (servico == 'e681eb4347842a10b678ec40f26d43c7') { // Impressoras
        g_form.addOption('tipo_requisicao', 'Falha de impressão', 'Falha de impressão');
        g_form.addOption('tipo_requisicao', 'Falha de scanner', 'Falha de scanner');
        g_form.addOption('tipo_requisicao', 'Alteração de local físico (reconfiguração)', 'Alteração de local físico (reconfiguração)');

    } else if (servico == 'cfc1a3c347842a10b678ec40f26d4329') { //Wi-Fi (Sem Fio)
        g_form.addOption('tipo_requisicao', 'Falha ao conectar na Wi-Fi', 'Falha ao conectar na Wi-Fi');

    } else if (servico == 'e0d12fc347842a10b678ec40f26d4324') { //Link de internet
        g_form.addOption('tipo_requisicao', 'Lentidão link de internet (dados)', 'Lentidão link de internet (dados)');
        g_form.addOption('tipo_requisicao', 'Solicitar um novo link de internet (dados)', 'Solicitar um novo link de internet (dados)');

    } else if (servico == '6ce16fc347842a10b678ec40f26d43b8') { // Solicitação de novos equipamentos
        g_form.addOption('tipo_requisicao', 'Solitação de novos equipamentos (Notebook, Celular, Monitor, Teclado, Mouse, Fone)', 'Solitação de novos equipamentos (Notebook, Celular, Monitor, Teclado, Mouse, Fone)');
        g_form.addOption('tipo_requisicao', 'Devolução de equipamentos (Notebook, Celular, Monitor, Teclado, Mouse, Fone)', 'Devolução de equipamentos (Notebook, Celular, Monitor, Teclado, Mouse, Fone)');

    } else if (servico == 'fee12b0747842a10b678ec40f26d433a') { // Controle de Acesso
        g_form.addOption('tipo_requisicao', 'Solicitação de Acesso (VPN/NPA, Email, Paytrack, Sharepoint)', 'Solicitação de Acesso (VPN/NPA, Email, Paytrack, Sharepoint)');

    } else if (servico == '6df12b0747842a10b678ec40f26d435f') { // Acesso a Servidores (Terceiros)
        g_form.addOption('tipo_requisicao', 'Acesso supervisionado à servidores', 'Acesso supervisionado à servidores');

    }


}