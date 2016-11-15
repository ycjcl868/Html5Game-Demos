/**
 * Created by jcl on 16/10/30.
 */

onmessage = function (e) {
    postMessage(["rgba(255,0,0,"+(30*e.data)/500+")",120-e.data*15]);
};