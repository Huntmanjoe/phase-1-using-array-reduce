const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = getTotalBatteries(batteryBatches);

function getTotalBatteries(batteryBatches) {
    let totalBatteries = batteryBatches.reduce(function (accumulator, element) {
        return accumulator + element;
    }, 0);
    
    return totalBatteries;
}

console.log(getTotalBatteries(batteryBatches));