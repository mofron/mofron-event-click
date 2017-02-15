/**
 * @file Click.js
 * @author simpart
 */

/**
 * @class mofron.event.Click
 * @brief click event class for component
 */
mofron.event.Click = class extends mofron.Event {
    
    constructor (fnc, prm) {
        try {
            super(fnc, prm);
            this.name('Click');

            /* font theme */
            this.m_pointer = true;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * add click event to target component.
     */
    eventConts (tgt_dom) {
        try {
            var _func = this.func;
            var _parm = this.parm;
            if (true === this.pointer()) {
                this.target.style('cursor', 'pointer');
            }
            tgt_dom.getRawDom().addEventListener('click',function() {
                try {
                    if (null != _func) {
                        _func(_parm);
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
                return this.m_pointer;
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
