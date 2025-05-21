//Trigger Values
// 
function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}
	//Type appropriate comment here, and begin script below
	var grSysUser = new GlideRecord('sys_user');
	grSysUser.addQuery('sys_id',newValue);
	grSysUser.setLimit(1);
	grSysUser.query(cbFunction);
}
	
function cbFunction(queryResult){
	if(queryResult.next()){
		g_form.setValue('ramal',queryResult.phone);
		g_form.setValue('centro_de_custo',queryResult.cost_center);
		g_form.setValue('filial',queryResult.location);
	}
}
	