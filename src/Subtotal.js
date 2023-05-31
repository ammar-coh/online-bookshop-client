import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      
   
      
    },
    
   
  });
  

function Subtotal() {
   // const classes = useStyles();
    const counts= useSelector((state)=> state.checkout)
    console.log(counts)
    var dollar = counts.products.map(function(i){
      console.log('total',i.price)
                return i.price*i.qty
    })
    console.log(dollar)
   
    const sum = dollar.reduce((a,b)=>a+b,0)
    console.log(sum)
     const total = sum
    return (
        <div>
           <h3>${total}</h3> 
        </div>
    )
}

export default Subtotal
