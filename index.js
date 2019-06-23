/**
 * @file mofron-event-click/index.js
 * @brief click event for mofron component
 *        event hander when component is clicked
 * @author simpart
 */
const mf     = require("mofron");
const Common = require("mofron-event-common");

mf.event.Click = class extends Common {
    /**
     * initialize click event
     * 
     * @param (array (function/mixed)) "handler" parameter
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name("Click");
            this.prmMap("handler");
            this.type("click");
            this.prmOpt(po);
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
                this.component().style({ 'cursor' : 'pointer' });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * mouse cursor style
     *
     * @param (boolean) true: mouse-in cursor is pointer
     *                  false: mouse-in coursor is default
     * @return (boolean) mouse-in cursor style
     * @type parameter
     */
    pointer (flg) {
        try { return this.member('pointer', 'boolean', flg, true); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.event.Click;
/* end of file */
