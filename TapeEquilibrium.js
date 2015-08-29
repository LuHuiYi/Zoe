function solution(A) {
    //sum all numbers
    var total_sum = 0;
    for (var i = 0; i < A.length; i += 1) {
        total_sum += A[i];
    }
    
    //calculate differences
    var buffer = [];
    var left_sum = 0;
    var right_sum = 0;
    for (var j = 0; j < A.length; j += 1) {
        left_sum += A[j];
        right_sum = total_sum - left_sum;
        buffer.push(Math.abs(left_sum - right_sum));
    }
    
    //return minimum difference
    return Math.min.apply(null, buffer);
}