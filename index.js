'use strict';
/**
 *
 * @param {int} Value
 * @returns
 */
const FraksiHarga = function (Value) {

    const x = Value;
    let HargaFraksi;
    switch (true) {
        case(x <= 200):
            HargaFraksi = 1;
            break;
        case(x <= 500):
            HargaFraksi = 2;
            break;
        case(x <= 2000):
            HargaFraksi = 5;
            break;
        case(x <= 5000):
            HargaFraksi = 10;
            break;
        default:
            HargaFraksi = 25;
            break;
    }
    return HargaFraksi
}

module.exports = {
    FraksiHarga
}
