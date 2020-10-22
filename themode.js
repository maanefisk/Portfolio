function themode() {
    if (model.page='day') {
        document.getElementById('daymode').setAttribute('href','daymode.css');
    } else document.getElementById('daymode').setAttribute('href','/nightmode.css');
}