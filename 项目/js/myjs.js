/**
 * Created by lenovo on 2017/6/11.
 */
$(function(){
    var $searchBar = $('#search_bar'),
   // $searchResult = $('#searchResult'),
    $searchText = $('#search_text'),
    $searchInput = $('#search_input'),
    $searchClear = $('#search_clear'),
    $searchCancel = $('#search_cancel');

    function hideSearchResult(){
//        $searchResult.hide();
        $searchInput.val('');
    }
    function cancelSearch(){
   //     hideSearchResult();
        $searchBar.removeClass('weui-search-bar_focusing');
        $searchText.show();
    }

    $searchText.on('click', function(){
        $searchBar.addClass('weui-search-bar_focusing');
        $searchInput.focus();
    });
    $searchInput
        .on('blur', function () {
        if(!this.value.length) cancelSearch();
    })
    .on('input', function(){
        if(this.value.length) {
    //        $searchResult.show();
        } else {
      //      $searchResult.hide();
        }
    })
    ;
    $searchClear.on('click', function(){
     //   hideSearchResult();
        $searchInput.focus();
    });
    $searchCancel.on('click', function(){
      //  cancelSearch();
        $searchInput.blur();
    });
});
