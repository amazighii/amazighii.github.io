export function doughnutChart(up, down) {
    const svgNS = "http://www.w3.org/2000/svg";
    const size = 155; // SVG size
    const center = size / 2;
    const outerRadius = 60;
    const innerRadius = 50;
    const data = [up, down];
    const colors = ["#626161", "black"];
    const total = data.reduce((sum, value) => sum + value, 0);

    let startAngle = 0;
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
    svg.classList.add("doughnutChart");

    data.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        const endAngle = startAngle + sliceAngle;

        const x1 = center + outerRadius * Math.cos(startAngle);
        const y1 = center + outerRadius * Math.sin(startAngle);
        const x2 = center + outerRadius * Math.cos(endAngle);
        const y2 = center + outerRadius * Math.sin(endAngle);

        const largeArc = sliceAngle > Math.PI ? 1 : 0;

        const pathData = `M${center},${center} L${x1},${y1} A${outerRadius},${outerRadius} 0 ${largeArc},1 ${x2},${y2} Z`;

        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", pathData);
        path.setAttribute("fill", colors[index]);
        svg.appendChild(path);

        startAngle = endAngle;
    });

    const innerCircle = document.createElementNS(svgNS, "circle");
    innerCircle.setAttribute("cx", center);
    innerCircle.setAttribute("cy", center);
    innerCircle.setAttribute("r", innerRadius);
    innerCircle.setAttribute("fill", "#d3d3d3"); // Center cut-out
    svg.appendChild(innerCircle);

    return svg;

}