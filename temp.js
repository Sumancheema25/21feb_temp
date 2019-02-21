
         let tempData = [10, 21, 34, 65, 78, 90, 11, 12, 13, 41, 45, 48, 22, 23, 24, 25, 55, 50, 61, 89, 90, 78, 123, 125, 149, 19, 29, 30]
        
        function getMax() {
            let max = tempData[0]
            for ( i = 1; i < tempData.length; i++) {
                if (tempData[i] > max) {
                    max = tempData[i]
                }
            }
            //return max
            console.log(max);

        }
        getMax();

        function getMin() {
            let min = tempData[0]
            for (let i = 1; i < tempData.length; i++) {
                if (tempData[i] < min) {
                    min = tempData[i]
                }
            }
            console.log(min);
            
        }
        getMin();

        function getMean() {
            let sum = 0,avg=0;
            for(let i = 0; i <tempData.length; i++) {
                sum += tempData[i]
            }
            avg= sum/tempData.length;

            console.log(avg);
        }

        getMean()
        function get_mode()         //Mode function
        {
            var maxValue = 0, maxCount = 0, i, j;
         
            for (i = 0; i < tempData.length; ++i) {
               var count = 0;
               
               for (j = 0; j < tempData.length; ++j) {
                  if (tempData[j] == tempData[i])
                  ++count;
               }
               
               if (count > maxCount) {
                  maxCount = count;
                  maxValue = tempData[i];
               }
            }
         
            return maxValue;
         }

         console.log(get_mode() )



   