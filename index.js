// function LeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }


// ***************************************************     *****************************************


// function calculate_S(a, b, c) {
//     return (a + b + c) / 2;
// }


// function T_Area(a, b, c) {
//     const S = calculate_S(a, b, c);
//     const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }


// ***************************************************     *****************************************

// function calculate_Average_Mrks(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
//   }
  
//   function calculate_Percentage(subject1, subject2, subject3) {
//     const totalMarks = subject1 + subject2 + subject3;
//     return (totalMarks / (3 * 100)) * 100;
//   }
  
//   function mainFunction(subject1, subject2, subject3) {
//     const average = calculate_Average_Mrks(subject1, subject2, subject3);
//     const percentage = calculate_Percentage(subject1, subject2, subject3);
  
//     console.log("Marks in Subject 1: " + subject1);
//     console.log("Marks in Subject 2: " + subject2);
//     console.log("Marks in Subject 3: " + subject3);
//     console.log("Average Marks: " + average);
//     console.log("Percentage: " + percentage + "%");
//   }

// ***************************************************     *****************************************



// function delete_Vowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, '');
//   }




// ***************************************************     *****************************************


// function convertToMeters(distanceInKilometers) {
//     return distanceInKilometers * 1000;
//   }
 
//   function convertToFeet(distanceInKilometers) {
//     return distanceInKilometers * 3280.84;
//   }
  
//   function convertToInches(distanceInKilometers) {
//     return distanceInKilometers * 39370.1;
//   }
  
//   function convertToCentimeters(distanceInKilometers) {
//     return distanceInKilometers * 100000;
//   }
  
//   function printConvertedDistances(distanceInKilometers) {
//     const distanceInMeters = convertToMeters(distanceInKilometers);
//     const distanceInFeet = convertToFeet(distanceInKilometers);
//     const distanceInInches = convertToInches(distanceInKilometers);
//     const distanceInCentimeters = convertToCentimeters(distanceInKilometers);
  
//     console.log(`Distance in meters: ${distanceInMeters} m`);
//     console.log(`Distance in feet: ${distanceInFeet} ft`);
//     console.log(`Distance in inches: ${distanceInInches} inches`);
//     console.log(`Distance in centimeters: ${distanceInCentimeters} cm`);
//   }
  

// ***************************************************     *****************************************


// function calculate_OvertimePay(hoursWorked) {
//     const regular_Hours = 40; 
//     const hourly_Rate = 12.00; 
//     const overtime_Rate = 12.00 * 1.5; 
  
//     if (hoursWorked <= regular_Hours) {
      
//       return hoursWorked * hourly_Rate;
//     } else {
      
//       const regularPay = regular_Hours * hourly_Rate;
//       const overtimeHours = hoursWorked - regular_Hours;
//       const overtimePay = overtimeHours * overtime_Rate;
      
//       return regularPay + overtimePay;
//     }
//   }
  