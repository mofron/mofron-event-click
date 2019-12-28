/**
 * @file mofron-event-click/index.js
 * @brief click event for mofron component
 *        event hander when component is clicked
 * @license MIT
 */
const Common = require("mofron-event-common");

module.exports = class extends Common {
    /**
     * initialize click event
     * 
     * @param (mixed) handler parameter
     *                key-value: event config
     * @short handler
     * @type private
     */
    constructor (p1) {
        try {
            super();
            
	    /* init config */
	    this.name("Click");
            this.confmng().add("pointer", { type: "boolean", init: true });
	    this.shortForm("handler");
            this.type("click");
            
	    /* set config */
	    if (0 < arguments.length) {
	        this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * add click event to target component.
     * 
     * @param (component) event target component
     * @type private
     */
    contents (tgt) {
        try {
            super.contents(tgt);
            if (true === this.pointer()) {
                this.component().style(
		    { 'cursor' : 'pointer' },
		    { passive: true }
		);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * mouse cursor style
     *
     * @param (boolean) true: mouse-in cursor is pointer [default]
     *                  false: mouse-in coursor is default
     * @return (boolean) mouse-in cursor style
     * @type parameter
     */
    pointer (flg) {
        try {
	    return this.confmng("pointer", flg);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
