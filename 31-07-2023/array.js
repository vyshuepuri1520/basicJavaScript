var arr = [6,4,2,1,8,7]
var sum=0;
var avg;
var len = arr.length
console.log(len + " is the length of the array")

for ( var i =0 ; i < arr.length;i++)
{
    console.log(arr[i])
}
var large= 0;
for(var x = 0;x < arr.length;x++)
    {
        if (large < arr[x])
        {
            large = arr[x];
        }
    }
console.log(large + " is the largest of the array")
var small= arr[0];
for(var x = 1;x < arr.length;x++)
    {
        if (small > arr[x])
        {
            small = arr[x];
        }
    }
console.log(small + " is the smallest of the array")
for (var i =0;i<arr.length;i++)
{
    sum += arr[i];
}
avg = sum/len;
console.log(avg + " is the average of the array")
