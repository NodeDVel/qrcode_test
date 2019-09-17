const app = require('express');
const router = app.Router();
const QrCode = require('qrcode');
const scanner = require('qr-code-scanner');

router.get('/:qrcode', async (req, res, next) => {
    const data = req.params.qrcode;

    QrCode.toDataURL(data, function (err, url) {
        const data = url.replace(/.*,/,'');//정규식
        const img = new Buffer(data, 'base64');
        console.log(data);
        res.end(img);
    });

    scanner.initiate({

    });
});

module.exports = router;