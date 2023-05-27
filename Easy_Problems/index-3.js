//Given a positive integer millis, write an asyncronous function 
//that sleeps for time milliseconds. It can resolve any value.

function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time));
};

async function main() {
  const delay = 200;
  const beforeSleep = Date.now();
  await sleep(delay);
  const afterSleep = Date.now();
  console.log(`Elapsed time: ${afterSleep - beforeSleep} ms`);
  return 0;
}

main();

/*If you're experiencing a delay greater than the specified time milliseconds 
  when running the code in Node.js, there could be a few reasons for this behavior.

System load: The delay may be affected by the current load on your system. 
             If your system is busy with other tasks, the actual execution 
             time may be longer than the specified delay.

Timer resolution: The timer resolution in Node.js may not be precise enough to guarantee 
                  an exact delay of 200 milliseconds. The actual delay may be slightly longer or shorter 
                  depending on the system's timer resolution.

External factors: There could be external factors or processes running on your system that are affecting 
                  the execution time, such as other applications or services.
*/