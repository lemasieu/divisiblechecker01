function checkDivisibility() {
    const number = parseInt(document.getElementById('numberInput').value);
    const divisor = parseInt(document.getElementById('divisorSelect').value);
    const resultArea = document.getElementById('resultArea');
    
    if (isNaN(number)) {
        resultArea.value = "Vui lòng nhập một số nguyên hợp lệ.";
        return;
    }

    let result = `Kiểm tra số ${number} chia hết cho ${divisor}:\n\n`;
    let isDivisible = false;

    switch (divisor) {
        case 1:
            isDivisible = true;
            result += "Bất kỳ số nào cũng chia hết cho 1.";
            break;
        case 2:
            isDivisible = number % 2 === 0;
            result += `Chữ số tận cùng là ${Math.abs(number) % 10}, ${isDivisible ? 'là chẵn' : 'là lẻ'}, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 2.`;
            break;
        case 3:
            const sumDigits = String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
            isDivisible = sumDigits % 3 === 0;
            result += `Tổng các chữ số: ${sumDigits}, ${isDivisible ? 'chia hết' : 'không chia hết'} cho 3.`;
            break;
        case 4:
            const lastTwoDigits = Math.abs(number) % 100;
            isDivisible = lastTwoDigits % 4 === 0;
            result += `Hai chữ số cuối: ${lastTwoDigits}, ${isDivisible ? 'chia hết' : 'không chia hết'} cho 4.`;
            break;
        case 5:
            const lastDigit = Math.abs(number) % 10;
            isDivisible = lastDigit === 0 || lastDigit === 5;
            result += `Chữ số tận cùng là ${lastDigit}, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 5.`;
            break;
        case 6:
            isDivisible = (number % 2 === 0) && (String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 3 === 0);
            result += `Số ${number} ${number % 2 === 0 ? 'có chữ số tận cùng chẵn' : 'không có chữ số tận cùng chẵn'}, và tổng các chữ số ${isDivisible ? 'chia hết' : 'không chia hết'} cho 3, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 6.`;
            break;
        case 7:
            const lastDigit7 = Math.abs(number) % 10;
            const remaining7 = Math.floor(Math.abs(number) / 10);
            const sum7 = remaining7 + 5 * lastDigit7;
            isDivisible = number % 7 === 0;
            result += `Phần còn lại: ${remaining7}, chữ số tận cùng: ${lastDigit7}. 5 × ${lastDigit7} + ${remaining7} = ${sum7}, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 7.`;
            break;
        case 8:
            const lastThreeDigits = Math.abs(number) % 1000;
            isDivisible = lastThreeDigits % 8 === 0;
            result += `Ba chữ số cuối: ${lastThreeDigits}, ${isDivisible ? 'chia hết' : 'không chia hết'} cho 8.`;
            break;
        case 9:
            const sumDigits9 = String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
            isDivisible = sumDigits9 % 9 === 0;
            result += `Tổng các chữ số: ${sumDigits9}, ${isDivisible ? 'chia hết' : 'không chia hết'} cho 9.`;
            break;
        case 10:
            isDivisible = Math.abs(number) % 10 === 0;
            result += `Chữ số tận cùng là ${Math.abs(number) % 10}, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 10.`;
            break;
        case 11:
            const digits11 = String(Math.abs(number)).split('').map(Number);
            let alternatingSum = 0;
            for (let i = 0; i < digits11.length; i++) {
                alternatingSum += (i % 2 === 0 ? 1 : -1) * digits11[i];
            }
            isDivisible = alternatingSum % 11 === 0;
            result += `Tổng xen kẽ đan dấu: ${alternatingSum}, ${isDivisible ? 'chia hết' : 'không chia hết'} cho 11.`;
            break;
        case 12:
            isDivisible = (String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 3 === 0) && ((Math.abs(number) % 100) % 4 === 0);
            result += `Số ${number} ${String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 3 === 0 ? 'chia hết' : 'không chia hết'} cho 3 và ${((Math.abs(number) % 100) % 4 === 0) ? 'chia hết' : 'không chia hết'} cho 4, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 12.`;
            break;
        case 13:
            const lastDigit13 = Math.abs(number) % 10;
            const remaining13 = Math.floor(Math.abs(number) / 10);
            const sum13 = remaining13 + 4 * lastDigit13;
            isDivisible = number % 13 === 0;
            result += `Phần còn lại: ${remaining13}, chữ số tận cùng: ${lastDigit13}. 4 × ${lastDigit13} + ${remaining13} = ${sum13}, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 13.`;
            break;
        case 14:
            isDivisible = (number % 2 === 0) && (number % 7 === 0);
            result += `Số ${number} ${number % 2 === 0 ? 'chia hết' : 'không chia hết'} cho 2 và ${number % 7 === 0 ? 'chia hết' : 'không chia hết'} cho 7, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 14.`;
            break;
        case 15:
            isDivisible = (String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 3 === 0) && ((Math.abs(number) % 10 === 0) || (Math.abs(number) % 10 === 5));
            result += `Số ${number} ${String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 3 === 0 ? 'chia hết' : 'không chia hết'} cho 3 và ${((Math.abs(number) % 10 === 0) || (Math.abs(number) % 10 === 5)) ? 'chia hết' : 'không chia hết'} cho 5, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 15.`;
            break;
        case 16:
            const lastFourDigits = Math.abs(number) % 10000;
            isDivisible = lastFourDigits % 16 === 0;
            result += `Bốn chữ số cuối: ${lastFourDigits}, ${isDivisible ? 'chia hết' : 'không chia hết'} cho 16.`;
            break;
        case 17:
            const lastDigit17 = Math.abs(number) % 10;
            const remaining17 = Math.floor(Math.abs(number) / 10);
            const diff17 = remaining17 - 5 * lastDigit17;
            isDivisible = number % 17 === 0;
            result += `Phần còn lại: ${remaining17}, chữ số tận cùng: ${lastDigit17}. ${remaining17} - 5 × ${lastDigit17} = ${diff17}, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 17.`;
            break;
        case 18:
            isDivisible = (number % 2 === 0) && (String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 9 === 0);
            result += `Số ${number} ${number % 2 === 0 ? 'chia hết' : 'không chia hết'} cho 2 và ${String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 9 === 0 ? 'chia hết' : 'không chia hết'} cho 9, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 18.`;
            break;
        case 19:
            const lastDigit19 = Math.abs(number) % 10;
            const remaining19 = Math.floor(Math.abs(number) / 10);
            const sum19 = remaining19 + 2 * lastDigit19;
            isDivisible = number % 19 === 0;
            result += `Phần còn lại: ${remaining19}, chữ số tận cùng: ${lastDigit19}. ${remaining19} + 2 × ${lastDigit19} = ${sum19}, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 19.`;
            break;
        case 20:
            isDivisible = (Math.abs(number) % 10 === 0) && ((Math.floor(Math.abs(number) / 10) % 10) % 2 === 0);
            result += `Số ${number} ${Math.abs(number) % 10 === 0 ? 'chia hết' : 'không chia hết'} cho 10 và chữ số hàng chục ${((Math.floor(Math.abs(number) / 10) % 10) % 2 === 0) ? 'là chẵn' : 'là lẻ'}, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 20.`;
            break;
        case 21:
            isDivisible = (String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 3 === 0) && (number % 7 === 0);
            result += `Số ${number} ${String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 3 === 0 ? 'chia hết' : 'không chia hết'} cho 3 và ${number % 7 === 0 ? 'chia hết' : 'không chia hết'} cho 7, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 21.`;
            break;
        case 22:
            isDivisible = (number % 2 === 0) && (String(Math.abs(number)).split('').map(Number).reduce((sum, digit, i) => sum + (i % 2 === 0 ? 1 : -1) * digit, 0) % 11 === 0);
            result += `Số ${number} ${number % 2 === 0 ? 'chia hết' : 'không chia hết'} cho 2 và ${String(Math.abs(number)).split('').map(Number).reduce((sum, digit, i) => sum + (i % 2 === 0 ? 1 : -1) * digit, 0) % 11 === 0 ? 'chia hết' : 'không chia hết'} cho 11, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 22.`;
            break;
        case 23:
            const lastDigit23 = Math.abs(number) % 10;
            const remaining23 = Math.floor(Math.abs(number) / 10);
            const sum23 = remaining23 + 7 * lastDigit23;
            isDivisible = number % 23 === 0;
            result += `Phần còn lại: ${remaining23}, chữ số tận cùng: ${lastDigit23}. ${remaining23} + 7 × ${lastDigit23} = ${sum23}, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 23.`;
            break;
        case 24:
            isDivisible = (String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 3 === 0) && ((Math.abs(number) % 1000) % 8 === 0);
            result += `Số ${number} ${String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 3 === 0 ? 'chia hết' : 'không chia hết'} cho 3 và ${((Math.abs(number) % 1000) % 8 === 0) ? 'chia hết' : 'không chia hết'} cho 8, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 24.`;
            break;
        case 25:
            const lastTwoDigits25 = Math.abs(number) % 100;
            isDivisible = lastTwoDigits25 % 25 === 0;
            result += `Hai chữ số cuối: ${lastTwoDigits25}, ${isDivisible ? 'chia hết' : 'không chia hết'} cho 25.`;
            break;
        case 26:
            isDivisible = (number % 2 === 0) && (number % 13 === 0);
            result += `Số ${number} ${number % 2 === 0 ? 'chia hết' : 'không chia hết'} cho 2 và ${number % 13 === 0 ? 'chia hết' : 'không chia hết'} cho 13, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 26.`;
            break;
        case 27:
            const groups27 = [];
            let temp27 = String(Math.abs(number)).split('').reverse().join('');
            for (let i = 0; i < temp27.length; i += 3) {
                groups27.push(parseInt(temp27.slice(i, i + 3).split('').reverse().join('') || '0'));
            }
            const sum27 = groups27.reduce((sum, num) => sum + num, 0);
            isDivisible = sum27 % 27 === 0;
            result += `Tổng các nhóm ba chữ số từ phải qua trái: ${sum27}, ${isDivisible ? 'chia hết' : 'không chia hết'} cho 27.`;
            break;
        case 28:
            isDivisible = ((Math.abs(number) % 100) % 4 === 0) && (number % 7 === 0);
            result += `Số ${number} ${((Math.abs(number) % 100) % 4 === 0) ? 'chia hết' : 'không chia hết'} cho 4 và ${number % 7 === 0 ? 'chia hết' : 'không chia hết'} cho 7, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 28.`;
            break;
        case 29:
            const lastDigit29 = Math.abs(number) % 10;
            const remaining29 = Math.floor(Math.abs(number) / 10);
            const sum29 = remaining29 + 3 * lastDigit29;
            isDivisible = number % 29 === 0;
            result += `Phần còn lại: ${remaining29}, chữ số tận cùng: ${lastDigit29}. ${remaining29} + 3 × ${lastDigit29} = ${sum29}, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 29.`;
            break;
        case 30:
            isDivisible = (String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 3 === 0) && (Math.abs(number) % 10 === 0);
            result += `Số ${number} ${String(Math.abs(number)).split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 3 === 0 ? 'chia hết' : 'không chia hết'} cho 3 và ${Math.abs(number) % 10 === 0 ? 'chia hết' : 'không chia hết'} cho 10, nên ${isDivisible ? 'chia hết' : 'không chia hết'} cho 30.`;
            break;
    }

    resultArea.value = result;
}