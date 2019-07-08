/**
 * @File Name          : AccountMapController.js
 * @Description        : 
 * @Author             : KyleGibson
 * @Group              : 
 * @Last Modified By   : KyleGibson
 * @Last Modified On   : 2019/07/08, 11:35:14
 * @Modification Log   : 
 *==============================================================================
 * Ver         Date                     Author      		      Modification
 *==============================================================================
 * 1.0    2019/07/08, 11:35:14   KyleGibson     Initial Version
**/
({
    onAccountsLoaded: function( component, event, helper ) {
        var mapMarkers = [];
        var accounts = event.getParam( 'accounts' );
        for ( var i = 0; i < accounts.length; i++ ) {
            var account = accounts[i];
            var marker = {
                'location': {
                    'Street': account.BillingStreet,
                    'City': account.BillingCity,
                    'PostalCode': account.BillingPostalCode
                },
                'title': account.Name,
                'description': (
                    'Phone: ' + account.Phone +
                    '<br/>' +
                    'Website: ' + account.Website
                ),
                'icon': 'standard:location'
            };
            mapMarkers.push( marker );
        }
        component.set( 'v.mapMarkers', mapMarkers );
    }
})