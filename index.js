/**
 * @file Click.js
 * @author simpart
 */

/**
 * @class mofron.event.Click
 * @brief click event class for component
 */
mofron.event.Click = class extends mofron.Event {
    
    constructor (po, p2, p3) {
        try {
            super();
            this.name('Click');
            this.prmMap('handler', 'handlerPrm', 'pointer');
            this.prmOpt(po, p2, p3);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * add click event to target component.
     */
    contents (tgt_dom) {
        try {
            var evt_func = this.handler(); 
            if (true === this.pointer()) {
                this.component().style({
                    'cursor' :  'pointer'
                });
            }
            let cmp = this.component();
            tgt_dom.getRawDom().addEventListener('click',function() {
                try {
                    if (null != evt_func[0]) {
                        evt_func[0](cmp, evt_func[1]);
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            },false);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    pointer (flg) {
        try {
            if (undefined === flg) {
                return (undefined === this.m_pointer) ? true : this.m_pointer;
            }
            
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            this.m_pointer = flg;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.event.Click;
