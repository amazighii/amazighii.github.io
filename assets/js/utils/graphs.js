export function doughnutChart(up, down) {
    const canvas = document.createElement("canvas");
    canvas.className = "doughnutChart";

    const ctx = canvas.getContext("2d");

    const data = [up, down];
    const colors = ["#626161", "black"];

    const total = data.reduce((sum, value) => sum + value, 0);
    let startAngle = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const outerRadius = 60;
    const innerRadius = 50;

    data.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        const endAngle = startAngle + sliceAngle;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = colors[index];
        ctx.fill();

        startAngle = endAngle;
    });

    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "#d3d3d3"; // Background color to "cut out" the center
    ctx.fill();

    return canvas;
}