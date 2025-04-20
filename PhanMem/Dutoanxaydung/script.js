document.getElementById('floors').addEventListener('input', function () {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const floors = parseInt(document.getElementById('floors').value);

    if (isNaN(length) || isNaN(width) || isNaN(floors)) {
        return; // Do nothing if inputs are invalid
    }

    const baseArea = length * width;

    // Suggest foundation type based on area and number of floors
    let suggestedFoundation = "Móng Đơn";
    let foundationFactor = 0.4; // Default to 40% for "Móng Đơn"
    if (baseArea > 100 || floors > 2) {
        suggestedFoundation = "Móng Băng";
        foundationFactor = 0.6; // 60% for "Móng Băng"
    }
    if (baseArea > 200 || floors > 3) {
        suggestedFoundation = "Móng Cọc";
        foundationFactor = 1.0; // 100% for "Móng Cọc"
    }

    // Automatically select the foundation type in the dropdown
    const foundationSelect = document.getElementById('foundation');
    Array.from(foundationSelect.options).forEach(option => {
        if (option.text.includes(suggestedFoundation)) {
            foundationSelect.value = option.value;
        }
    });
});

document.getElementById('calculateBtn').addEventListener('click', function () {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const floors = parseInt(document.getElementById('floors').value);

    if (isNaN(length) || isNaN(width) || isNaN(floors)) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }

    const baseArea = length * width;

    // Suggest foundation type based on area and number of floors
    let suggestedFoundation = "Móng Đơn";
    let foundationFactor = 0.4; // Default to 40% for "Móng Đơn"
    if (baseArea > 100 || floors > 2) {
        suggestedFoundation = "Móng Băng";
        foundationFactor = 0.6; // 60% for "Móng Băng"
    }
    if (baseArea > 200 || floors > 3) {
        suggestedFoundation = "Móng Cọc";
        foundationFactor = 1.0; // 100% for "Móng Cọc"
    }

    const roofFactor = parseFloat(document.getElementById('roof').value) / 100;
    const costPerSquareMeter = 6000000; // 6 triệu/m²

    // Calculate areas
    const totalFloorArea = baseArea * floors;
    const foundationArea = baseArea * foundationFactor;
    const roofArea = baseArea * roofFactor;

    // Calculate costs
    const foundationCost = foundationArea * costPerSquareMeter;
    const floorCost = baseArea * costPerSquareMeter;
    const roofCost = roofArea * costPerSquareMeter;
    const totalCost = foundationCost + floorCost * floors + roofCost;

    // Material estimates (approximate values based on standard construction practices)
    const totalConcreteVolume = (totalFloorArea + foundationArea + roofArea) * 0.15; // 0.15m³ concrete per m²
    const sand = totalConcreteVolume * 0.6; // 60% of concrete volume
    const stone = totalConcreteVolume * 0.4; // 40% of concrete volume
    const cementBags = totalConcreteVolume * 7; // 7 bags of cement per m³
    const bricks = totalFloorArea * 60; // 60 bricks per m²

    // Steel estimates
    const steelTotal = totalConcreteVolume * 120; // 120kg of steel per m³
    const plainSteel = steelTotal * 0.3; // 30% plain steel
    const deformedSteel = steelTotal * 0.7; // 70% deformed steel

    // Display suggested foundation type
    const floorAreasDiv = document.getElementById('floorAreas');
    floorAreasDiv.innerHTML = `<p>Loại móng đề xuất: ${suggestedFoundation}</p>`;
    floorAreasDiv.innerHTML += `<p>Diện tích từng sàn: ${baseArea.toFixed(2)} m²</p>`;
    for (let i = 1; i <= floors; i++) {
        floorAreasDiv.innerHTML += `<p>Sàn ${i}: ${baseArea.toFixed(2)} m² - Chi phí: ${(floorCost).toLocaleString()} VND</p>`;
    }

    // Display foundation and roof areas and costs
    floorAreasDiv.innerHTML += `<p>Móng: ${foundationArea.toFixed(2)} m² - Chi phí: ${foundationCost.toLocaleString()} VND</p>`;
    if (roofFactor > 0) {
        floorAreasDiv.innerHTML += `<p>Mái: ${roofArea.toFixed(2)} m² - Chi phí: ${roofCost.toLocaleString()} VND</p>`;
    }

    // Display total area and estimated cost
    document.getElementById('totalArea').innerHTML = `<p>Tổng diện tích xây dựng: ${(totalFloorArea + foundationArea + roofArea).toFixed(2)} m²</p>`;
    document.getElementById('estimatedCost').innerHTML = `<p>Tổng chi phí ước tính: ${totalCost.toLocaleString()} VND</p>`;

    // Display material estimates
    const materialEstimatesDiv = document.getElementById('materialEstimates');
    materialEstimatesDiv.innerHTML = `
        <h3>Dự Toán Vật Liệu</h3>
        <p>Cát: ${sand.toFixed(2)} m³</p>
        <p>Đá (1x2): ${stone.toFixed(2)} m³</p>
        <p>Xi măng: ${cementBags.toFixed(0)} bao</p>
        <p>Gạch: ${bricks.toFixed(0)} viên</p>
        <p>Thép tổng: ${steelTotal.toFixed(2)} kg</p>
        <p>Thép trơn: ${plainSteel.toFixed(2)} kg</p>
        <p>Thép vằn: ${deformedSteel.toFixed(2)} kg</p>
    `;
});
