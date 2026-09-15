/*
Sample Input:

queries = [ 3, 2, 1, 2, 6]

Sample Output:

17
*/

/*
 * "Pseudocode"
 *
* Sort the queries
* For each index:
*   * add up the values before it to get 'waitingTime'
* Add up all the 'waitingTime' to get 'totalWaitingTime'
*/

const minimumTotalWaitingTime = (patientTimes) => {
  const sortedPatientTimes = patientTimes.toSorted((a, b) => a - b);
  return sortedPatientTimes;
}

const result = minimumTotalWaitingTime([3, 2, 1, 2, 6])
console.log(result);