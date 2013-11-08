/*
 * - smooth-scroll.js -
 * Licence MIT
 * Written by Gabriel Delépine
 * Version 1.0.1 (2013-11-08)
 * Requirement : No one, it is a framework-free fonction (ie : You do not need to include any other file in your page such as jQuery)
 * Fork-me in github : https://github.com/Yappli/smooth-scroll/
 * */
(function() // Code in a function to create an isolate scope
{
    var speed = 500,
        moving_frequency = 15, // Affects performance !
        height_fixed_header = 0, // For layout with header with position:fixed. Write here the height of your header for your anchor don't be hiden behind
        links = document.getElementsByTagName('a'),
        href;
    for(var i=0; i<links.length; i++)
    {   
        href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
        if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
        {
            links[i].onclick = function()
            {
                var element;
                var href = this.attributes.href.nodeValue.toString();
                if(element = document.getElementById(href.substr(1)))
                {
                    var hop_count = speed/moving_frequency
                    var getScrollTopDocumentAtBegin = getScrollTopDocument();
                    var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin - height_fixed_header) / hop_count;
                    
                    for(var i = 1; i <= hop_count; i++)
                    {
                        (function()
                        {
                            var hop_top_position = gap*i;
                            setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                        })();
                    }
                }
                
                return false;
            };
        }
    }
    
    var getScrollTopElement =  function (e)
    {
        var top = 0;

        while (e.offsetParent != undefined && e.offsetParent != null)
        {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }
        
        return top;
    };
    
    var getScrollTopDocument = function()
    {
        return document.documentElement.scrollTop + document.body.scrollTop;
    };
})();
