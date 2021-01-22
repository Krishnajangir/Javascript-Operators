
// nullish coalescing operator example
      console.log(null ?? 5) //5
      console.log(5 ?? 3) // 5 
            
// Logical nusslish operator
      let x = null;
       let y= undefined;
        let z = 4;
         console.log(x ??= z); //4
         console.log(y = (y ?? z)); //4
         console.log(x , y , z) // 4, 4, 4
         
