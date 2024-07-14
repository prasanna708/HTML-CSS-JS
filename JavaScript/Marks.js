function Result()
{
    let s1,s2,s3,s4,s5,tot,avg,grd;
    s1 = +html.value;
    s2 = +css.value;
    s3 = +js.value;
    s4 = +bs.value;
    s5 = +react.value;

    tot = s1 + s2 + s3 + s4 + s5;
    avg = tot / 5;

    if(s1>=39 && s2>=39 && s3>=39 && s4>=39 && s5>=39){
        grd = avg>=90 ? 'A+' : avg>=80 ? 'A' : avg>=70 ? 'B+' : avg>=60 ? 'B' : avg>=50 ? 'C' : 'D';
    }else {
        grd = 'Fail';
    }

    total.value = 'Total Marks: '+tot;
    average.value = 'Average: '+avg;
    grade.value = 'Grade: '+grd;
}