const r = document.querySelector(':root');
const img = document.querySelector('.alterarCor');
var TheThemeIsBlack = true;
var cor1 = '#FFFFFF';
var cor2 = '#DADADA';
var cor3 = '#F1F1F1';
var BrancoOuPreto = 'black';
var texto = 'white';

const ChangeTheme = () => {
    
    if (TheThemeIsBlack == true) {
     
        TheThemeIsBlack = false;
        r.style.setProperty('--Cor-Principal', cor1);
        r.style.setProperty('--Cor-Secundaria', cor2);
        r.style.setProperty('--Cor-Terciaria', cor3);
        r.style.setProperty('--BrancoOuPreto', BrancoOuPreto);
        r.style.setProperty('--Texto', texto);
         cor1 = '#1B1B1B';
         cor2 = '#2B2A2A';
         cor3 = '#1A1A1C';
         BrancoOuPreto = 'white';
         texto = 'black';
         img.src = "imgs/Sun.png"
    }
    else {
     
        TheThemeIsBlack = true;
        r.style.setProperty('--Cor-Principal', cor1);
        r.style.setProperty('--Cor-Secundaria', cor2);
        r.style.setProperty('--Cor-Terciaria', cor3);
        r.style.setProperty('--BrancoOuPreto', BrancoOuPreto);
        r.style.setProperty('--Texto', texto);
        cor1 = '#FFFFFF';
        cor2 = '#DADADA';
        cor3 = '#F1F1F1';
        BrancoOuPreto = 'black';
        texto = 'white';
        img.src = "imgs/Moon.png"
    }
}