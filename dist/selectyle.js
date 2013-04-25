/*! Selectyle - Mini javascipt to style <select> elements - v0.1.0 - 2013-04-25
* https://github.com/jeromesmadja/selectyle
* Copyright (c) 2013 Jerome Smadja; Licensed MIT */
var _Selectyle =
{
    /**
     * Creates elements, style them, and attach events
     *
     * @param  {object} elements    Select element list
     *
     */
    init : function( elements )
    {
        var count = elements.length;

        if ( count === 0 ) { return false; }

        for ( var i = count - 1; i >= 0; i-- )
        {
            // Loop through the select nodes only
            if ( elements[i].nodeName !== 'SELECT' ) { return false; }

            // Define select, wrapper and span elements
            var select = elements[i],
                wrapper = document.createElement('div'),
                span = document.createElement('span');

            // Define wrapper and span classes
            wrapper.className = 'selectyle-wrapper';
            span.className = 'selectyle-span';

            // Append wrapper
            select.parentNode.appendChild( wrapper );

            // Append span placeholder
            wrapper.appendChild( span );

            // Append the select
            span.parentNode.insertBefore( select, span.nextSibling);

            // Update the span to the selected option
            this.updateSpan( select , span );

            // Trigger change event manually when any key is pressed
            this.addEvent( select , 'keydown' , this.keydown( select ) );

            // Add change event onto the current select element
            this.addEvent( select , 'change' , this.change( select , span ) );
        }
    },

    /**
     * addEventListener polyfill for IE8
     *
     * @param {object} elem         element the event gets bound to
     * @param {string} event_type   event name
     * @param {function} handler    function that gets triggered when the event is fired
     *
     */
    addEvent : function( elem , event_type , handler )
    {
        if ( typeof elem.addEventListener === 'function' )  { elem.addEventListener( event_type , handler , false ); }
        else if ( typeof elem.attachEvent === 'object'  )   { elem.attachEvent( 'on' + event_type , handler ); }
    },

    /**
     * Update span that contains the selected option text
     *
     * @param  {object} select  Current select element
     * @param  {object} span    Current span element
     *
     */
    updateSpan : function( select , span )
    {
        // Delay the query to get the selected option,
        // otherwise it returns the previous selected option for some reason
        setTimeout( function()
        {
            span.innerHTML = select.options[ select.selectedIndex ].text;
        }, 5 );
    },

    /**
     * Handler for keydown event
     *
     * @param  {object} select      Current select element where the change gets fired from
     *
     */
    keydown : function( select )
    {
        return function()
        {
            var event = document.createEvent( 'HTMLEvents' );
            event.initEvent( 'change', true , false );
            select.dispatchEvent( event );
        };
    },

    /**
     * Handler for change event
     *
     * @param  {object} select  Current select element
     * @param  {object} span    Current span element
     *
     */
    change : function( select , span )
    {
        return function()
        {
            _Selectyle.updateSpan( select , span );
        };
    }
};

/**
 * Creates an instance of _Selectyle and triggers init() method
 *
 * @param  {string} query   CSS selector
 *
 * @return {void}
 */
var Selectyle = function( query ) {
    var elements = document.querySelectorAll( query );
    _Selectyle.init.call( _Selectyle , elements  );
};