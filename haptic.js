function HapticOn(){

    if('vibrate' in navigator){
        navigator.vibrate(100);
    }
}