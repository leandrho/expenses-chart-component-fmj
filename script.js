
const setDayValue = ({day, amount}, max = false) => {
    const daybarElement = document.querySelector(`#${day}`);
    const parentElement = daybarElement.closest('.day-box');
    const barElement = parentElement.querySelector('.day-bar');
    const tooltip = parentElement.querySelector('.day-amount');

    let height = Math.floor((amount * 286)/100);

    !max ? barElement.classList.add('soft-red')
         : barElement.classList.add('cyan');

    barElement.style.height = height+'px';
    tooltip.innerHTML='$'+amount;

}
window.onload = async () => {

    const req = await fetch('./data.json');
    const data = await req.json();
    
    let max = 0;
    for(let i = 0; i < data.length; ++i){
        if(data[i].amount>max)
            max=data[i].amount;
    }

    for(let i = 0; i < data.length; ++i){
        setDayValue(data[i], data[i].amount==max);
    }
    
}