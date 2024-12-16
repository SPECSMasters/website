// Set up canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//creates background where the penguin lives
const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Function to draw an ellipse
function drawEllipse(x, y, width, height, options = {}) {
    ctx.save();
    ctx.translate(x, y);
    if (options.rotateAngle) ctx.rotate((options.rotateAngle * Math.PI) / 180);
    ctx.beginPath();
    ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, 2 * Math.PI);
    if (options.fill) {
        ctx.fillStyle = options.fill;
        ctx.fill();
    }
    if (options.border) {
        ctx.lineWidth = options.borderWidth || 1;
        ctx.strokeStyle = options.border;
        ctx.stroke();
    }
    ctx.restore();
}

// Function to draw a circle
function drawCircle(x, y, radius, options = {}) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    if (options.fill) {
        ctx.fillStyle = options.fill;
        ctx.fill();
    }
    if (options.border) {
        ctx.lineWidth = options.borderWidth || 1;
        ctx.strokeStyle = options.border;
        ctx.stroke();
    }
}

// Function to draw a triangle (polygon)
function drawPolygon(points, options = {}) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    if (options.fill) {
        ctx.fillStyle = options.fill;
        ctx.fill();
    }
}

//Next code is just copied from python and translated to java script
// Penguin function
function penguin(x, y, z) {
    // Feet
    drawEllipse(x - z * 7.5, y + z * 10.5, z * 2, z * 5, { fill: "orange", rotateAngle: 50 });
    drawEllipse(x - z * 6.5, y + z * 10.5, z * 2, z * 5, { fill: "orange", rotateAngle: 20 });
    drawEllipse(x - z * 5.5, y + z * 10.5, z * 2, z * 5, { fill: "orange", rotateAngle: -10 });
    drawEllipse(x + z * 7.5, y + z * 10.5, z * 2, z * 5, { fill: "orange", rotateAngle: -50 });
    drawEllipse(x + z * 6.5, y + z * 10.5, z * 2, z * 5, { fill: "orange", rotateAngle: -20 });
    drawEllipse(x + z * 5.5, y + z * 10.5, z * 2, z * 5, { fill: "orange", rotateAngle: 10 });

    // Wings
    drawEllipse(x - z * 9, y - z * 5, z * 6.5, z * 12, { fill: "black", rotateAngle: -40 });
    drawEllipse(x - z * 9, y - z * 4, z * 3.5, z * 11, { fill: "white", rotateAngle: -40 });
    drawEllipse(x + z * 9, y - z * 5, z * 6.5, z * 12, { fill: "black", rotateAngle: 40 });
    drawEllipse(x + z * 9, y - z * 4, z * 3.5, z * 11, { fill: "white", rotateAngle: 40 });

    // Belly
    drawEllipse(x, y - z * 5, z * 15, z * 23, { fill: "black" });
    drawCircle(x, y + z * 3, z * 8.3, { fill: "white", border: "black", borderWidth: 15 });

    // Body
    drawEllipse(x - z * 2.5, y - z * 4, z * 6.5, z * 18, { fill: "white" });
    drawEllipse(x + z * 2.5, y - z * 4, z * 6.5, z * 18, { fill: "white" });

    // Eyes
    drawCircle(x - z * 2.5, y - z * 9, z * 1, { fill: "black" });
    drawCircle(x + z * 2.5, y - z * 9, z * 1, { fill: "black" });

    // Beak
    drawPolygon(
        [
            { x: x - z * 1.5, y: y - z * 7 },
            { x: x + z * 1.5, y: y - z * 7 },
            { x: x + z * 0.5, y: y - z * 5 },
        ],
        { fill: "orange" }
    );
}

// Initialize penguin
penguin(200, 200, 10);

// Function to increment penguin counter 
function incrementPenguin() {
    let penguin1 = document.querySelector('.penguin-fat');
    let currentCount = parseInt(penguin1.innerHTML);
    penguin1.innerHTML = currentCount + 1;
}
