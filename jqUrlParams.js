
(function($){
    
    $.fn.getParam = function(key){
        /**
         * Obtiene un parámetro especifico del url
         *
         */
        var params = getParamsInLine();
        var list = params.split('&');
        
        list.each(function(index,element){
            if (element === key) {
                return element === key ? undefined: element;
            }
        });
        return "";
    };
    
    $.fn.getParams = function(){
        /**
         * Obtiene todos los parámetros concatendados
         * 
         */
        return getParamsInLine();
    };
    
    function getParamsInLine() {
        /**
         * Obtiene todos los parámetros concatendados
         * 
         */
         
        return decodeURIComponent(window.location.search.substring(1));
    }
}( jQuery ));