/* eslint-disable */

import { Promise } from "core-js";

let container = null;

function ensureContainer() {
    if (!container) {
      document.body.insertAdjacentHTML('afterbegin', '<div id="image-loader" style="height: 0; widht: 0; overflow: hidden;"></div>');
      container = document.body.querySelector('#image-loader');
    }
    return container;
}

function appendChild(url) {
    const container = ensureContainer();
    container.insertAdjacentHTML('afterbegin', `<img src="${url}" alt="" />`)
    return container.querySelector('img');
}

class Loader {
    static MAX_TIMES = 3;
    queue = {};

    add(url) {
        if (this.queue[url]) return this.queue[url].promise;
        const handleLoad = (resolve, reject) => {
            const img = appendChild(url);
            this.queue[url].img = img;
            img.onload = () => {
                resolve(img);
                this._removeChild(url);
            };
            img.onerror = (e) => {
                this.queue[url].times++;
                if (Loader.MAX_TIMES > this.queue[url].times) {
                reject(e);
                return;
                }
                this._removeChild(url);
                handleLoad(resolve, reject);
            }
        }
        this.queue[url] = {
            times: 0
        };
        const promise = new Promise(handleLoad);
        this.queue[url].promise = promise;
        return promise;
    }

    _removeChild(url) {
        const options = this.queue[url];
        if (!options) return;
        const container = ensureContainer();
        container.removeChild(options.img);
        options.img.onload = FUNC_NOOP;
    }
}

export default new Loader();

const FUNC_NOOP = function () { }

/* eslint-enable */
