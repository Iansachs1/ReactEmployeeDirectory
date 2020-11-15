

function compareNames(direction = 1) {
    return function (employeeRecord1, employeeRecord2) {
        // uncomment for ASCII char code fun!
        // console.log(name1.charCodeAt(0));
        // console.log(name2.charCodeAt(0));

        const name1 = `${employeeRecord1.name.last} ${employeeRecord1.name.first}`
        const name2 = `${employeeRecord2.name.last} ${employeeRecord2.name.first}`

        let result = 0;

        if(name1 > name2) {
            result = 1;
        } else if (name1 < name2) {
            result = -1;
        }
        return result * direction;
    }
}

export default compareNames