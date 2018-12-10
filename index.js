/**
 * @file mofron-event-click/index.js
 * @brief click event for mofron component
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class mofron.event.Click
 * @brief click event class
 */
mf.event.Click = class extends mf.Event {
    
    constructor (po) {
        try {
            super();
            this.name('Click');
            this.prmMap('handler');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * add click event to target component.
     *
     * @note private method
     */
    contents (tgt_dom) {
        try {
            if (true === this.pointer()) {
                this.component().style({ 'cursor' :  'pointer' });
            }
            let clk = this;
            tgt_dom.getRawDom().addEventListener(
                'click',
                () => {
                    try { clk.execHandler(clk); } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                false
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter mouse cursor style config
     *
     * @param flg (true) cursor style is pointer
     * @param flg (false) cursor style is default
     * @param flg (undefined) call as getter
     * @return (boolean) 
     */
    pointer (flg) {
        try {
            let ret = this.member('pointer', 'boolean', flg, true);
            if (true === this.isExecd()) {
                if (undefined === flg) {
                    return this.component().style('cursor');
                } else if (true === flg) {
                    this.component().style({ 'cursor' : 'pointer' });
                }
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.event.Click;
/* end of file */
