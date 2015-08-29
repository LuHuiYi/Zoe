function solution(A) {
    var this_sum = 0;
    var real_sum = 0;
    for (var i = 0; i < A.length; i += 1) {
        this_sum += A[i];
        real_sum += (i + 1);
    }
    
    return A.length - (this_sum - real_sum) + 1;
}