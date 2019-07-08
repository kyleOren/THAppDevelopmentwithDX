/**
 * @File Name          : AccountSearchHelper.js
 * @Description        : 
 * @Author             : KyleGibson
 * @Group              : 
 * @Last Modified By   : KyleGibson
 * @Last Modified On   : 2019/07/08, 11:31:21
 * @Modification Log   : 
 *==============================================================================
 * Ver         Date                     Author      		      Modification
 *==============================================================================
 * 1.0    2019/07/08, 11:31:21   KyleGibson     Initial Version
**/
({
    // code in the helper is reusable by both
    // the controller.js and helper.js files
    handleSearch: function( component, searchTerm ) {
        var action = component.get( "c.searchAccounts" );
        action.setParams({
            searchTerm: searchTerm
        });
        action.setCallback( this, function( response ) {
            var event = $A.get( "e.c:AccountsLoaded" );
            event.setParams({
                "accounts": response.getReturnValue()
            });
            event.fire();
        });
        $A.enqueueAction( action );
    }
})