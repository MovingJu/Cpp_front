const video = document.getElementById('video');
navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => { video.srcObject = stream; });

const canvas = document.getElementById('output');
const ctx = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 480;

const ws = new WebSocket(link + "/ws");

ws.onopen = () => {
    console.log("Web Socket is connected!");
}

ws.onmessage = async (e) => {
    const arrayBuffer = await e.data.arrayBuffer();
    const uint8 = new Uint8ClampedArray(arrayBuffer);

    const smallWidth = 160;
    const smallHeight = 120;

    const imageData = new ImageData(uint8, smallWidth, smallHeight);

    // 임시 캔버스에 먼저 그리기
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = smallWidth;
    tempCanvas.height = smallHeight;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.putImageData(imageData, 0, 0);

    // 한 번에 실제 캔버스 640x480로 확대
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(tempCanvas, 0, 0, smallWidth, smallHeight, 0, 0, canvas.width, canvas.height);
}

function captureAndSend() {
    const scale = 0.25;
    const width = (video.videoWidth || 640) * scale;
    const height = (video.videoHeight || 480) * scale;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(video, 0, 0, width, height);

    const imageData = tempCtx.getImageData(0, 0, width, height);
    ws.send(imageData.data.buffer);
}