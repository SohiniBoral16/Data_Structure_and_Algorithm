function longestCommonSubsequence(s1, s2) {
    var m = s1.length, n = s2.length;
    var dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    // populate the dp table
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // reconstruct the longest common subsequence
    var lcs = [];
    var i = m, j = n;
    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
            lcs.unshift(s1[i - 1]); // prepend the matching character to lcs
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcs.join('');
}

console.log(longestCommonSubsequence("EABCDGH", "AEFHR")); // Output: "AEH"
