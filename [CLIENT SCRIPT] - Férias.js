function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    var dayInMiliseconds = 24 * 60 * 60 * 1000;

    var abono = g_form.getValue("deseja_abono_pecuniario");
    var parcela = g_form.getValue("parcelar_ferias");
    var periodos = g_form.getValue("quantos_periodos");

    var data_ini1 = getDateFromFormat(g_form.getValue("data_de_inicio"), g_user_date_format);
    var data_ini2 = getDateFromFormat(g_form.getValue("data_de_inicio_2"), g_user_date_format);
    var data_ini3 = getDateFromFormat(g_form.getValue("data_de_inicio_terceiro"), g_user_date_format);
    var data_ter1 = getDateFromFormat(g_form.getValue("data_de_termino"), g_user_date_format);
    var data_ter2 = getDateFromFormat(g_form.getValue("data_de_termino_2"), g_user_date_format);
    var data_ter3 = getDateFromFormat(g_form.getValue("data_de_termino_terceiro"), g_user_date_format);
    //var data_ano = getDateFromFormat(g_form.getValue("data_ano"), g_user_date_format);

    var difDaysPer1 = (data_ter1 - data_ini1) / dayInMiliseconds;
    var difDaysPer2 = (data_ter2 - data_ini2) / dayInMiliseconds;
    var difDaysPer3 = (data_ter3 - data_ini3) / dayInMiliseconds;
    /*var difDaysAno1 = (data_ini1 - data_ano) / dayInMiliseconds;
    var difDaysAno2 = (data_ini2 - data_ano) / dayInMiliseconds;*/


    if (parcela == 'sim') {
        if (periodo == 'dois') {
            if (data_ini1 && data_ini2 && data_ter1 && data_ter2) {
                if (abono == 'sim') {
                    if (difDaysPer1 != 13) {
                        g_form.addErrorMessage('Você optou pelo parcelamento e pelo Abono, então a quantidade de dias entre a Data de Término e a Data de Início do Primeiro Período não poderá ser diferente do que 14 dias.');
                        g_form.setValue("data_de_inicio", "");
                        g_form.setValue("data_de_termino", "");
                        //g_form.setValue("total_de_dias_1_periodo", difDaysPer1-1);			
                    }
                    if (difDaysPer2 != 5) {
                        g_form.addErrorMessage('Você optou pelo parcelamento e pelo Abono, então a quantidade de dias entre a Data de Término e a Data de Início do Segundo Período não poderá ser diferente do que 6 dias.');
                        g_form.setValue("data_de_inicio_2", "");
                        g_form.setValue("data_de_termino_2", "");
                        //g_form.setValue("total_de_dias_2_periodo", difDaysPer2-1);
                    }
                } else if (abono == 'nao') {
                    ValidaParcSemAbono(dias_1, dias_2);
                }

            }
        } else if (periodo == 'tres') {
            ValidaParcTresPeriodos(dias_1, dias_2, dias_3);

        }
    } else if (parcela == 'nao') {
        if (data_ini1 && data_ter1) {
            if (abono == 'sim') {
                if (difDaysPer1 != 19) {
                    g_form.addErrorMessage('Você optou pelo não parcelamento e pelo Abono, então a quantidade de dias entre a Data de Término e a Data de Início não poderá ser diferente do que 20 dias.');
                    g_form.setValue("data_de_inicio", "");
                    g_form.setValue("data_de_termino", "");
                    //g_form.setValue("total_de_dias_1_periodo", difDaysPer1-1);
                }
            } else if (abono == 'nao') {
                if (difDaysPer1 != 29) {
                    g_form.addErrorMessage('Você optou pelo não parcelamento e por não receber o Abono, então a quantidade de dias entre a Data de Término e a Data de Início não poderá ser diferente do que 30 dias.');
                    g_form.setValue("data_de_inicio", "");
                    g_form.setValue("data_de_termino", "");
                    //g_form.setValue("total_de_dias_1_periodo", difDaysPer1-1);
                }
            }
        }
    }
}
if (data_ini1 && data_ter1) {
    if (abono == 'sim') {
        if (difDaysPer1 != 19) {
            g_form.addErrorMessage('Você optou pelo não parcelamento e pelo Abono, então a quantidade de dias entre a Data de Término e a Data de Início não poderá ser diferente do que 20 dias.');
            g_form.setValue("data_de_inicio", "");
            g_form.setValue("data_de_termino", "");
            //g_form.setValue("total_de_dias_1_periodo", difDaysPer1-1);
        }
    } else if (abono == 'nao') {
        if (difDaysPer1 != 29) {
            g_form.addErrorMessage('Você optou pelo não parcelamento e por não receber o Abono, então a quantidade de dias entre a Data de Término e a Data de Início não poderá ser diferente do que 30 dias.');
            g_form.setValue("data_de_inicio", "");
            g_form.setValue("data_de_termino", "");
            //g_form.setValue("total_de_dias_1_periodo", difDaysPer1-1);
        }
    }
}



function ValidaParcSemAbono(dias_1, dias_2) {

    var ok = true;

    if (dias_1 == 13 && dias_2 != 15) {
        g_form.addErrorMessage('Você optou pelo parcelamento e pelo abono e no primeiro período você selecionou um total de 14 dias, porém o segundo período não totaliza 16 dias, favor revisar conforme tabela');
        ok = false;
    } else if (dias_1 == 14 && dias_2 != 14) {
        g_form.addErrorMessage('Você optou pelo parcelamento e pelo abono e no primeiro período você selecionou um total de 15 dias, porém o segundo período não totaliza 15 dias, favor revisar conforme tabela');
        ok = false;
    } else if (dias_1 == 15 && dias_2 != 13) {
        g_form.addErrorMessage('Você optou pelo parcelamento e pelo abono e no primeiro período você selecionou um total de 16 dias, porém o segundo período não totaliza 14 dias, favor revisar conforme tabela');
        ok = false;
    } else if (dias_1 == 16 && dias_2 != 12) {
        g_form.addErrorMessage('Você optou pelo parcelamento e pelo abono e no primeiro período você selecionou um total de 17 dias, porém o segundo período não totaliza 13 dias, favor revisar conforme tabela');
        ok = false;
    } else if (dias_1 == 17 && dias_2 != 11) {
        g_form.addErrorMessage('Você optou pelo parcelamento e pelo abono e no primeiro período você selecionou um total de 18 dias, porém o segundo período não totaliza 12 dias, favor revisar conforme tabela');
        ok = false;
    } else if (dias_1 == 19 && dias_2 != 9) {
        g_form.addErrorMessage('Você optou pelo parcelamento e pelo abono e no primeiro período você selecionou um total de 20 dias, porém o segundo período não totaliza 10 dias, favor revisar conforme tabela');
        ok = false;
    } else if (dias_1 == 24 && dias_2 != 4) {
        g_form.addErrorMessage('Você optou pelo parcelamento e pelo abono e no primeiro período você selecionou um total de 25 dias, porém o segundo período não totaliza 5 dias, favor revisar conforme tabela');
        ok = false;
    } else if ((dias_1 < 13 || dias_1 > 24) || (dias_2 < 4 || dias_2 > 15)) {
        g_form.addErrorMessage('O primerio ou o segundo período está inválido conforme a tabela na descrição deste item de catálogo, favor rever');
        ok = false;
    } else if (dias_1 == 18 || (dias_1 > 19 && dias_1 < 23)) {
        g_form.addErrorMessage('O primerio ou o segundo período está inválido conforme a tabela na descrição deste item de catálogo, favor rever');
        ok = false;
    } else if (dias_2 == 10 || (dias_2 > 4 && dias_2 < 9)) {
        g_form.addErrorMessage('O primerio ou o segundo período está inválido conforme a tabela na descrição deste item de catálogo, favor rever');
        ok = false;
    }

    if (!ok) {
        g_form.setValue("data_de_inicio", "");
        g_form.setValue("data_de_inicio_2", "");
        g_form.setValue("data_de_termino", "");
        g_form.setValue("data_de_termino_2", "");
    }
}

function ValidaParcTresPeriodos(dias_1, dias_2, dias_3) {

    var ok = true;
    if (dias_1 == 14 && (dias_2 != 8 || dias_3 != 8)) {
        g_form.addErrorMessage('Você optou pelo parcelamento e pelo abono e no primeiro período você selecionou um total de 14 dias, porém os outros períodos não são 7 e 8 dias, favor revisar conforme tabela');
        ok = false;
    } else if (dias_1 == 15 && (dias_2 != 7 || dias_3 != 8)) {
        g_form.addErrorMessage('Você optou pelo parcelamento em três períodos e no primeiro período você selecionou 15 dias, porém os outros períodos não são 7 e 8 dias, favor revisar conforme tabela ');
        ok = false;
    } else if (dias_1 == 16 && (dias_2 != 7 || dias_3 != 7)) {
        g_form.addErrorMessage('Você optou pelo parcelamento em três períodos e no primeiro período você selecionou 16 dias, porém os outros períodos não são 7 e 7 dias, favor revisar conforme tabela ');
        ok = false;
    } else if (dias_1 == 20 && (dias_2 != 5 || dias_3 != 5)) {
        g_form.addErrorMessage('Você optou pelo parcelamento em três períodos e no primeiro período você selecionou 20 dias, porém os outros períodos não são 5 e 5 dias, favor revisar conforme tabela ');
        ok = false;
    } else if (dias_1 !== 14 || dias_1 !== 15 || dias_1 !== 16 || dias_1 !== 20) {
        g_form.addErrorMessage('O primerio período está inválido conforme a tabela na descrição deste item de catálogo, favor rever');
        ok = false;
    }


    if (!ok) {
        g_form.setValue("data_de_inicio", "");
        g_form.setValue("data_de_inicio_2", "");
        g_form.setValue("data_de_termino", "");
        g_form.setValue("data_de_termino_2", "");
        g_form.setValue("data_de_inicio_terceiro", "");
        g_form.setValue("data_de_termino_terceiro", "");
    }
}