let background = document.querySelector('body');
let lighticon = document.querySelector('#lighticon');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function changeBG(){
    if(prefersDark.matches){
        background.style.backgroundColor = 'rgb(254, 255, 220)';
        background.style.backgroundImage = "url('image/background3x.png')";
        background.classList.add('preview-light');
    }
    else{
        background.style.backgroundColor = 'rgb(95, 83, 71)';
        background.style.backgroundImage = "url('image/dark.png')";
        background.classList.add('preview-dark');
    }
}
function reverseBG(){
    background.style.backgroundColor = '';
    background.style.backgroundImage = '';
    background.classList.remove('preview-light', 'preview-dark');
}

let isChanged = false;

function changed(){
    if(!isChanged){
        changeBG();
        isChanged = true;
    } else {
        reverseBG();
        isChanged = false;
    }
}

lighticon.addEventListener('click', changed);

if (window.innerWidth > 1030) {

document.body.style.cursor = 'none';

const cursor = document.createElement('div');
cursor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31 31" fill="none">
<path d="M8.69664 15.068C8.02364 15.068 7.34847 15.0334 6.6798 15.0745C5.03083 15.1741 3.40135 15.3558 2.11161 16.5634C-0.314226 18.8357 -0.0285792 22.5536 3.15249 23.6832C3.5247 23.8152 3.65021 24.0446 3.6567 24.4407C3.67185 25.579 4.03108 26.5918 4.91615 27.3557C6.63869 28.8446 9.64447 28.6368 11.2112 26.8926C12.7801 25.1462 13.386 22.9388 14.0222 20.7596C14.3035 19.7922 14.494 18.7989 14.732 17.8207C14.7861 17.5935 14.8467 17.3208 15.154 17.3793C15.4656 17.4377 15.5046 17.6995 15.457 17.9765C15.4418 18.0588 15.4267 18.141 15.4158 18.2254C15.1259 20.3982 15.0068 22.5817 15.1259 24.7718C15.2189 26.4662 15.5695 28.0698 16.9458 29.2536C19.4885 31.4415 22.7951 30.6148 23.691 27.821C23.8186 27.4206 24.074 27.3319 24.4527 27.3319C27.3286 27.3254 29.0858 24.6917 28.0752 21.623C27.4823 19.8225 26.0129 18.9374 24.4051 18.2233C22.3384 17.3057 20.1572 16.7712 17.9585 16.2972C17.6707 16.2345 17.2963 16.2085 17.3786 15.8038C17.4543 15.4273 17.7984 15.4922 18.1057 15.5355C20.4817 15.8579 22.86 16.1176 25.262 15.8341C26.911 15.6393 28.4279 15.1914 29.484 13.7696C31.2952 11.3306 30.6092 8.40914 28.0276 7.36173C27.5061 7.14965 27.3567 6.87264 27.3286 6.3446C27.2421 4.73236 26.463 3.55727 24.9526 2.92968C22.9573 2.10084 20.4211 2.93618 19.1877 4.82326C17.8547 6.86399 17.2163 9.17306 16.6515 11.5081C16.513 12.0794 16.3896 12.6529 16.2576 13.2264C16.2057 13.4536 16.0888 13.6332 15.8313 13.59C15.576 13.5467 15.5154 13.3476 15.5435 13.1095C15.5673 12.9018 15.5825 12.6919 15.6063 12.4819C15.8725 10.1404 16.0867 7.8032 15.8053 5.44219C15.5933 3.67846 14.9376 2.20688 13.386 1.23304C11.1052 -0.199578 8.19244 0.477782 7.30304 3.17639C7.15589 3.62219 6.85724 3.65032 6.47421 3.65898C4.50714 3.69793 3.03996 4.96609 2.70021 6.89428C2.32151 9.05187 3.48574 11.1921 5.59997 12.2764C7.96088 13.4882 10.4927 14.1505 13.0701 14.6807C13.3406 14.7369 13.663 14.7586 13.6046 15.1459C13.5483 15.5268 13.2583 15.4705 12.9684 15.4316C11.5509 15.239 10.1314 15.0918 8.70097 15.068H8.69664Z" fill="url(#paint0_radial_1_163)" stroke="black" stroke-miterlimit="10"/>
<defs> <radialGradient id="paint0_radial_1_163" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.4981 15.4965) scale(15.0008 15.0014)">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="#CBD987"/>
    </radialGradient>
  </defs> </svg>`;

cursor.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
`;

document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

}


