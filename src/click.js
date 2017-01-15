/**
 * @file Click.js
 * @author simpart
 */

/**
 * @class mofron.event.Click
 * @brief click event class for component
 */
mofron.event.Click = class extends mofron.event.Base {
    /**
     * add click event to target component.
     */
    eventFunc () {
        try {
            var _func = this.func;
            var _parm = this.parm;
            this.target.getDom().addEventListener('click',function() {
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
}
