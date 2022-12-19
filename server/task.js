// PRINT TRIANGLE STAR

// let height = 5;
// let star = "";

// for(var i=1; i<=height; i++)
// {
//     for(var j=1; j<=height-i; j++)
//     {
//         star = star+"-";
//     }
//     for(var k=0; k<2*i-1; k++)
//     {
//         star=star+"*";
//     }
//     star = star+"\n";
    
// }
// console.log(star)


// 2ND LARGET NUMBER IN ARRAY

// let arr = [4, 32, 2, 5, 8];

// for(var i=0; i<arr.length; i++)
// {
//     for(var j=i+1; j<arr.length; j++)
//     {
//         if(arr[j] > arr[i])
//         {
//             temp = arr[j];
//             arr[j] = arr[i];
//             arr[i]=temp;

//         }
//     }
// }
// console.log("Sorted array=>", arr);

// REMOVE LARGEST NUMBER FROM ARRAY
// const arr = [4,7,2,8,9];
// console.log(arr)
// for(var i=0; i<arr.length; i++)
// {
//     for(var j=i+1; j<arr.length; j++)
//     {
//         if(arr[j] > arr[i])
//         {
//             temp = arr[j];
//             arr[j] = arr[i];
//             arr[i]=temp;
//         }
//     }

// }
// const index = arr.indexOf(arr[0]);
// if(index > -1)
// {
//     arr.splice(index,1);
// }

// console.log(arr)


// //REMOVE ITEM FROM ARRAY
// const array = [2, 5, 9];

// console.log(array);

// const index = array.indexOf(5);
// console.log(index)
// if (index ) { // only splice array when item is found
//   array.splice(index, 1); // 2nd parameter means remove one item only
// }

// // array = [2, 9]
// console.log(array);



// FIND LARGET Number IN ARRAY

// var arr = [3, 6, 2,67, 56, 32, 5];
// var largest = arr[0];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// const index = arr.indexOf(largest);
// if(index > -1)
// {
//     arr.splice(index,1);

// }
// // console.log(index);
// console.log(arr);



// var arr = [5,6,3,8,9,7];
// console.log(arr)
// for(var i=0; i<arr.length; i++)
// {
//     for(var j=i+1; j<arr.length; j++)
//     {
//         if(arr[i] < arr[j])
//         {
//             temp = arr[j];
//             arr[j]=arr[i];
//             arr[i]=temp;
//         }
//     }
// }
// console.log(arr);

// var arr = [3, 6, 2,67, 56, 32, 5];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) 
//     {
//         largest = arr[i];
//     }
// }
// console.log(largest)


// var arr = [5,6,3,7,87,2,3,6,4];
// var large = arr[0];
// console.log(arr)
// for(var i=0; i<arr.length; i++)
// {
//     if(arr[i] > large)
//     {
//         large = arr[i];
//     }
// }
// const index = arr.indexOf(large);

//     arr.splice(index,1);

// console.log(arr);