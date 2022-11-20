// BÀI 1
function onAverage() {
    let physical = parseFloat(document.getElementById("physical").value);
    let chemistry = parseFloat(document.getElementById("chemistry").value);
    let biology = parseFloat(document.getElementById("biology").value);
    let average = (physical + chemistry + biology);

    document.getElementById("average").innerHTML = average / 3
}

// BÀI 2
function onChangeTemperature() {
    let C = parseFloat(document.getElementById("celsius").value);
    let F = (C / 5) * 9 + 32;

    document.getElementById("fahrenheit").innerHTML = F.toFixed(0);
}


// BÀI 3
function onAreaCircle() {
    let R = parseFloat(document.getElementById("radius").value);
    let areaCircle = R * R * (Math.PI);

    document.getElementById("resultArea").innerHTML = "Diện tích hình tròn: " + areaCircle;
}

// BÀI 4
function onPerimeter() {
    let R = parseFloat(document.getElementById("radius").value);
    let perimeter = R * 2 * (Math.PI);

    document.getElementById("resultPerimeter").innerHTML = "Chu vi hình tròn: " + perimeter;
}