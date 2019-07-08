/**
 * @File Name          : AccountSearchController.js
 * @Description        : 
 * @Author             : KyleGibson
 * @Group              : 
 * @Last Modified By   : KyleGibson
 * @Last Modified On   : 2019/07/08, 11:30:35
 * @Modification Log   : 
 *==============================================================================
 * Ver         Date                     Author      		      Modification
 *==============================================================================
 * 1.0    2019/07/08, 11:30:35   KyleGibson     Initial Version
**/
({
    onInit: function( component, event, helper ) {
        // proactively search on component initialization
        var searchTerm = component.get( "v.searchTerm" );
        helper.handleSearch( component, searchTerm );
    },
    onSearchTermChange: function( component, event, helper ) {
        // search anytime the term changes in the input field
        var searchTerm = component.get( "v.searchTerm" );
        helper.handleSearch( component, searchTerm );
    }
})