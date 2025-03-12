function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
       return;
    }
     var tipo = g_form.getValue('tipo_beneficio');
     var colab = g_form.getValue('colaborador');
     var gr = new GlideRecord('sys_user');
     gr.get(colab);
     var desc = tipo + ' - ' + gr.name;		
     g_form.setValue('descricao', desc);
 
    //Type appropriate comment here, and begin script below
    
 }