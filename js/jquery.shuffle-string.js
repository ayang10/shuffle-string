(function( $, window, document, undefined) {
    $.fn.shuffleString = function (options) { // qjuery way of defining functions

        var settings = $.extend({
            color: "#0000", // default color of my text
            done: null
        }, options)


        return this.each(function() {
            $(this).text(shuffleString($(this).text()));
            $(this).css('color', settings.color);

            if($.isFunction(settings.done)){
                settings.done.call(this);
            }

            function shuffleString(str) {
                var array = str.split("");
                for(var index = array.length - 1; index > 0; index--){
                    var val = Math.floor(Math.random() * (index + 1));
                    var temp = array[index];
                    array[index] = array[val];
                    array[val] = temp;
                }
                return array.join("");


            }
            
        })
    }

}(jQuery, window, document)); // wrapped inside this function because anything not wrap in this function may conflict with functions outside of the plugin