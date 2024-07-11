function calcAmount()
{
    let p,t,r,si,tamt;
    p = pAmt.value;
    t = time.value;
    r = roi.value;
    si = p * t * r / 100;
    tamt = si + +p;
    intAmt.value = "Interest Amount: "+si;
    totAmt.value = "Total Amount: "+tamt;
}