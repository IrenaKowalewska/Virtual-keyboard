const keysData = [
    [
        {
            en: '`', ru: 'ё', enShift: '~', ruShift: 'Ё', code: 'Backquote',
        },
        {
            en: '1', ru: '1', enShift: '!', ruShift: '!', code: 'Digit1',
        },
        {
            en: '2', ru: '2', enShift: '@', ruShift: '"', code: 'Digit2',
        },
        {
            en: '3', ru: '3', enShift: '#', ruShift: '№', code: 'Digit3',
        },
        {
            en: '4', ru: '4', enShift: '$', ruShift: ';', code: 'Digit4',
        },
        {
            en: '5', ru: '5', enShift: '%', ruShift: '%', code: 'Digit5',
        },
        {
            en: '6', ru: '6', enShift: '^', ruShift: ':', code: 'Digit6',
        },
        {
            en: '7', ru: '7', enShift: '&', ruShift: '?', code: 'Digit7',
        },
        {
            en: '8', ru: '8', enShift: '*', ruShift: '*', code: 'Digit8',
        },
        {
            en: '9', ru: '9', enShift: '(', ruShift: '(', code: 'Digit9',
        },
        {
            en: '0', ru: '0', enShift: ')', ruShift: ')', code: 'Digit0',
        },
        {
            en: '-', ru: '-', enShift: '_', ruShift: '_', code: 'Minus',
        },
        {
            en: '=', ru: '=', enShift: '+', ruShift: '+', code: 'Equal',
        },
        {
            en: '', ru: '', enShift: '', ruShift: '', code: 'Backspace',
        },
    ],
    [
        {
            en: '   ', ru: '   ', enShift: '   ', ruShift: '   ', code: 'Tab',
        },
        {
            en: 'q', ru: 'й', enShift: 'Q', ruShift: 'Й', code: 'KeyQ',
        },
        {
            en: 'w', ru: 'ц', enShift: 'W', ruShift: 'Ц', code: 'KeyW',
        },
        {
            en: 'e', ru: 'у', enShift: 'E', ruShift: 'У', code: 'KeyE',
        },
        {
            en: 'r', ru: 'к', enShift: 'R', ruShift: 'К', code: 'KeyR',
        },
        {
            en: 't', ru: 'е', enShift: 'T', ruShift: 'Е', code: 'KeyT',
        },
        {
            en: 'y', ru: 'н', enShift: 'Y', ruShift: 'Н', code: 'KeyY',
        },
        {
            en: 'u', ru: 'г', enShift: 'U', ruShift: 'Г', code: 'KeyU',
        },
        {
            en: 'i', ru: 'ш', enShift: 'I', ruShift: 'Ш', code: 'KeyI',
        },
        {
            en: 'o', ru: 'щ', enShift: 'O', ruShift: 'Щ', code: 'KeyO',
        },
        {
            en: 'p', ru: 'з', enShift: 'P', ruShift: 'З', code: 'KeyP',
        },
        {
            en: '[', ru: 'х', enShift: '{', ruShift: 'Х', code: 'BracketLeft',
        },
        {
            en: ']', ru: 'ъ', enShift: '}', ruShift: 'Ъ', code: 'BracketRight',
        },
        {
            en: '\\', ru: '\\', enShift: '|', ruShift: '/', code: 'Backslash',
        },
        {
            en: '', ru: '', enShift: '', ruShift: '', code: 'Delete',
        },
    ],
    [
        {
            en: '', ru: '', enShift: '', ruShift: '', code: 'CapsLock',
        },
        {
            en: 'a', ru: 'ф', enShift: 'A', ruShift: 'Ф', code: 'KeyA',
        },
        {
            en: 's', ru: 'ы', enShift: 'S', ruShift: 'Ы', code: 'KeyS',
        },
        {
            en: 'd', ru: 'в', enShift: 'D', ruShift: 'В', code: 'KeyD',
        },
        {
            en: 'f', ru: 'а', enShift: 'F', ruShift: 'А', code: 'KeyF',
        },
        {
            en: 'g', ru: 'п', enShift: 'G', ruShift: 'П', code: 'KeyG',
        },
        {
            en: 'h', ru: 'р', enShift: 'H', ruShift: 'Р', code: 'KeyH',
        },
        {
            en: 'j', ru: 'о', enShift: 'J', ruShift: 'О', code: 'KeyJ',
        },
        {
            en: 'k', ru: 'л', enShift: 'K', ruShift: 'Л', code: 'KeyK',
        },
        {
            en: 'l', ru: 'д', enShift: 'L', ruShift: 'Д', code: 'KeyL',
        },
        {
            en: ';', ru: 'ж', enShift: ':', ruShift: 'Ж', code: 'Semicolon',
        },
        {
            en: "'", ru: 'э', enShift: '"', ruShift: 'Э', code: 'Quote',
        },
        {
            en: '', ru: '', enShift: '', ruShift: '', code: 'Enter',
        },
    ],
    [
        {
            en: '', ru: '', enShift: '', ruShift: '', code: 'ShiftLeft',
        },
        {
            en: 'z', ru: 'я', enShift: 'Z', ruShift: 'Я', code: 'KeyZ',
        },
        {
            en: 'x', ru: 'ч', enShift: 'X', ruShift: 'Ч', code: 'KeyX',
        },
        {
            en: 'c', ru: 'с', enShift: 'C', ruShift: 'С', code: 'KeyC',
        },
        {
            en: 'v', ru: 'м', enShift: 'V', ruShift: 'М', code: 'KeyV',
        },
        {
            en: 'b', ru: 'и', enShift: 'B', ruShift: 'И', code: 'KeyB',
        },
        {
            en: 'n', ru: 'т', enShift: 'N', ruShift: 'Т', code: 'KeyN',
        },
        {
            en: 'm', ru: 'ь', enShift: 'M', ruShift: 'Ь', code: 'KeyM',
        },
        {
            en: ',', ru: 'б', enShift: '<', ruShift: 'Б', code: 'Comma',
        },
        {
            en: '.', ru: 'ю', enShift: '>', ruShift: 'Ю', code: 'Period',
        },
        {
            en: '/', ru: '.', enShift: '?', ruShift: ',', code: 'Slash',
        },
        {
            en: '', ru: '', enShift: '', ruShift: '', code: 'ArrowUp',
        },
        {
            en: '', ru: '', enShift: '', ruShift: '', code: 'ShiftRight',
        },
    ],
    [
        {
            en: 'en', ru: 'ru', enShift: '', ruShift: '', code: 'lang',
        },
        {
            en: ' ', ru: ' ', enShift: '', ruShift: '', code: 'Music',
        },
        {
            en: ' ', ru: ' ', enShift: '', ruShift: '', code: 'Voice',
        },
        {
        en: ' ', ru: ' ', enShift: '', ruShift: '', code: 'Space',
        },
        {
            en: '', ru: '', enShift: '', ruShift: '', code: 'ArrowLeft',
        },
        {
        en: '', ru: '', enShift: '', ruShift: '', code: 'ArrowDown',
        },
        {
        en: '', ru: '', enShift: '', ruShift: '', code: 'ArrowRight',
        },
    ],
];

class Keyboard {
    constructor(keysData) {
        this.keys = [];
        this.value = '';
        this.capsLock = false;
        this.shift = false;
        this.altLeft = false;
        this.controlLeft = false;
        this.isRu = false;
        this.keysData = keysData;
        this.music = false;
        this.voice = false;
        this.valueLast = '';
    }

    init() {
        this.isRu = JSON.parse(localStorage.getItem('isRu'));
        this.renderElem();
        this.windowListener();
        this.setFocus();
        const showKeyboard = document.querySelector('.keyboard-img');
        showKeyboard.addEventListener('click', () => {
            const wrapper = document.querySelector('.wrapper');
            wrapper.classList.toggle('wrapper-hidden');
        });
    }

    renderElem() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        this.keyboardContainer = document.createElement('div');
        this.keyboardContainer.classList.add('keyboard');

        this.textarea = document.createElement('textarea');
        this.textarea.classList.add('textarea');
       
        this.keyboardContainer.appendChild(this.createKeys());
        
        wrapper.append(this.keyboardContainer);
        this.keys = this.keyboardContainer.querySelectorAll('.key');
        document.body.append(this.textarea);
        document.body.appendChild(wrapper);
        this.toggleActive();
    }

    createKeys() {
        const fragment = document.createDocumentFragment();

        this.keysData.forEach((item) => {
            const keyRow = document.createElement('div');
            keyRow.classList.add('key-row');

            item.forEach((key) => {
                const keyElem = document.createElement('button');
                keyElem.setAttribute('data-key', `${key.code}`);
                keyElem.classList.add('key');

                switch (key.code) {
                    case 'Backspace':
                        keyElem.classList.add('wide');
                        keyElem.innerHTML = `<i class="material-icons">backspace</i>`;
                        keyElem.addEventListener('click', () => {
                            this.textarea.value = this.textarea.value.substring(0, this.textarea.value.length - 1);
                            this.removeShift();
                            this.setFocus();
                            this.playMusic('snare');
                        });
                        break;

                    case 'ShiftLeft':
                        keyElem.classList.add('shift-left');
                        keyElem.innerHTML = `<i class="material-icons">arrow_upward</i>`;
                        keyElem.addEventListener('click', () => {
                            this.shift = !this.shift;
                            this.toggleShift();
                            this.setFocus();
                            this.playMusic('snare');
                        });
                        break;

                    case 'ShiftRight':
                        keyElem.innerHTML = `<i class="material-icons">arrow_upward</i>`;
                        keyElem.addEventListener('click', () => {
                            this.shift = !this.shift;
                            this.toggleShift();
                            this.setFocus();
                            this.playMusic('snare');
                        });
                        break;

                    case 'Enter':
                        keyElem.classList.add('wide');
                        keyElem.innerHTML = `<i class="material-icons">keyboard_return</i>`;
                        keyElem.addEventListener('click', () => {
                            this.textarea.value += '\n';
                            this.removeShift();
                            this.setFocus();
                            this.playMusic('snare');
                        });
                        break;

                    case 'Tab':
                        keyElem.innerHTML = '<span>TAB</span>';
                        keyElem.addEventListener('click', () => {
                            this.textarea.value += '   ';
                            this.setFocus();
                            this.removeShift();
                            this.playMusic('snare');
                        });
                        break;

                    case 'Delete':
                        keyElem.innerHTML = '<span>DEL</span>';
                        keyElem.addEventListener('click', () => {
                            this.textarea.value = '';
                            this.setFocus();
                            this.removeShift();
                            this.playMusic('snare');
                        });
                        break;

                    case 'Space':
                        keyElem.classList.add('extra-wide');
                        keyElem.addEventListener('click', () => {
                            this.textarea.value += ' ';
                            this.setFocus();
                            this.removeShift();
                            this.playMusic('snare');
                        });
                        break;

                    case 'ArrowUp':
                        keyElem.innerHTML = '<span>🠝</span>';
                        keyElem.addEventListener('click', () => {
                            this.removeShift();
                            this.setFocus();
                            this.playMusic('snare');
                        });
                        break;

                    case 'ArrowLeft':
                        keyElem.innerHTML = '<span>🠜</span>';
                        keyElem.addEventListener('click', () => {
                            this.removeShift();
                            this.setFocus();
                            this.playMusic('snare');
                        });
                        break;

                    case 'ArrowDown':
                        keyElem.innerHTML = '<span>🠟</span>';
                        keyElem.addEventListener('click', () => {
                            this.removeShift();
                            this.setFocus();
                            this.playMusic('snare');
                        });
                        break;

                    case 'ArrowRight':
                        keyElem.innerHTML = '<span>🠞</span>';
                        keyElem.addEventListener('click', () => {
                            this.removeShift();
                            this.setFocus();
                            this.playMusic('snare');
                        });
                        break;

                    case 'Music':
                        keyElem.classList.add('key');
                        keyElem.innerHTML = `<i class="material-icons">volume_off</i>`;
                        keyElem.addEventListener('click', () => {
                            if (!this.music) {
                                this.music = true;
                                keyElem.innerHTML = `<i class="material-icons">volume_up</i>`;
                                this.playMusic('snare');
                            } else {
                                this.music = false;
                                keyElem.innerHTML = `<i class="material-icons">volume_off</i>`;
                            }
                        });
                        break;

                    case 'Voice':
                        keyElem.classList.add('key', 'key-activable');
                        if (this.voice){
                            keyElem.classList.add('key-active');
                            keyElem.innerHTML = `<i class="material-icons">mic</i>`;
                        }else{
                            keyElem.classList.remove('key-active');
                            keyElem.innerHTML = `<i class="material-icons">mic_off</i>`;
                        }

                        keyElem.addEventListener('click', ()=>{         
                        this.voice = !this.voice;   
                            if (this.voice){
                                keyElem.classList.add('key-active');
                                keyElem.innerHTML = `<i class="material-icons">mic</i>`;
                            }else{
                                keyElem.classList.remove('key-active');
                                keyElem.innerHTML = `<i class="material-icons">mic_off</i>`;
                        }
                        });
                        break;


                    case 'CapsLock':
                        keyElem.classList.add('wide', 'key-activable');
                        keyElem.innerHTML = `<i class="material-icons">keyboard_capslock</i>`;
                        keyElem.addEventListener('click', () => {
                            keyElem.classList.toggle('key-active');
                            this.toggleCapsLock();
                            this.setFocus();
                            this.playMusic('snare');
                        });
                        break;
                    
                    case 'lang':
                        keyElem.classList.add('key');
                        if (this.isRu) {
                            keyElem.innerHTML = '<span>ru</span>';
                        } else {
                            keyElem.innerHTML = '<span>en</span>';
                        }
                        keyElem.addEventListener('click', () => {
                            this.changeLanguage();
                            if (this.isRu) {
                                keyElem.innerHTML = '<span>ru</span>';
                                this.setFocus();
                                this.playMusic('kick');
                            } else {
                                keyElem.innerHTML = '<span>en</span>';
                                this.setFocus();
                                this.playMusic('tink');
                            }
                        });
                        break;

                    default:
                        this.keyValue = this.isRu ? key.ru : key.en;
                        keyElem.textContent = this.keyValue;
                        this.setFocus();
                        this.sound = this.isRu ? this.playMusic('kick') : this.playMusic('tink');
                        this.playMusic('kick');
                        keyElem.addEventListener('click', () => {
                            if (this.capsLock) {
                                this.textarea.value += keyElem.textContent.toUpperCase();
                                this.setFocus();
                                this.sound = this.isRu ? this.playMusic('kick') : this.playMusic('tink');
                            } else if (this.shift) {
                                this.textarea.value += keyElem.textContent.toUpperCase();
                                this.setFocus();
                                this.sound = this.isRu ? this.playMusic('kick') : this.playMusic('tink');
                            } else {
                                this.textarea.value += keyElem.textContent.toLowerCase();
                                this.setFocus();
                                this.sound = this.isRu ? this.playMusic('kick') : this.playMusic('tink');
                            }
                            if (this.shift) {
                                this.shift = false;
                                this.toggleShift();
                            }
                        });
                        break;
                }

                keyRow.append(keyElem);
            });

            fragment.append(keyRow);
        });

        return fragment;
    }

    toggleCapsLock() {
        this.capsLock = !this.capsLock;

        this.keys.forEach((key) => {
        const keyEl = key;
        if (keyEl.childElementCount === 0) {
            if (this.capsLock) {
                keyEl.textContent = keyEl.textContent.toUpperCase();
            } else {
                keyEl.textContent = keyEl.textContent.toLowerCase();
            }
        }
        });
    }
    toggleShift() {
        const arrKeys = this.keysData.reduce((acc, i) => acc.concat(i));
        this.keys.forEach((key) => {
            const keyEl = key;
            if (keyEl.childElementCount === 0) {
            const index = arrKeys.findIndex(item => item.code === keyEl.dataset.key);
                if (this.isRu) {
                    if (this.shift) {
                        keyEl.textContent = arrKeys[index].ruShift;
                    } else {
                        keyEl.textContent = arrKeys[index].ru;
                    }
                } else if (this.shift) {
                    keyEl.textContent = arrKeys[index].enShift;
                } else {
                    keyEl.textContent = arrKeys[index].en;
                }
            }
        });
    }
    removeShift() {
        if (this.shift) {
            this.shift = false;
            this.toggleShift();
        }
    }
    toggleActive() {
        this.keyboardContainer.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('key')) {
            e.target.classList.add('active');
        }

        if (e.target.parentElement.classList.contains('key')) {
            e.target.parentElement.classList.add('active');
        }
        });

        this.keyboardContainer.addEventListener('mouseup', (e) => {
        if (e.target.classList.contains('key')) {
            e.target.classList.remove('active');
        }

        if (e.target.parentElement.classList.contains('key')) {
            e.target.parentElement.classList.remove('active');
        }
        });
    }
    open() {
        this.keyboardContainer.remove('keyboard-hidden');
    }

    close(){
        this.keyboardContainer.add('keyboard-hidden');
    }
    windowListener() {
        window.addEventListener('keydown', (e) => {
            this.setFocus();
            const keyItem = document.querySelector(`[data-key="${e.code}"]`);
                if (keyItem) {
                    keyItem.classList.add('active');
                }
            
                if (e.code === 'AltLeft') {
                    this.altLeft = !this.altLeft;
                }
                
                if (e.code === 'Tab') {
                    this.textarea.value += '   ';
                    this.setFocus();
                }

        });
        
    window.addEventListener('keyup', (e) => {
        const keyItem = document.querySelector(`[data-key="${e.code}"]`);
        if (keyItem) {
            keyItem.classList.remove('active');
        }
    
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            this.shift = !this.shift;
            this.toggleShift();
        }
        if (e.code === 'Tab') {
            this.setFocus();
        }
    });
    }
    
    setFocus() {
        this.textarea.focus();
    }

    playMusic(sound) {
        let audio = new Audio();
        if (!this.music) {
            return;
        } else {
            switch(sound){
                case 'CapsLock':
                case 'Shift':
                case 'Space':
                case 'Backspace':
                case 'Enter':
                    audio.src = `./assets/${sound}.wav`;
                    break;
    
                default:
                    audio.src =  `./assets/${sound}.wav`;
                    break;
            } 
            
        }
        audio.play();
        setTimeout(()=>{
            audio.remove();
        }, 1000);
    }
    

    changeLanguage() {
    this.isRu = !this.isRu;
    localStorage.setItem('isRu', this.isRu);
    const arrKeys = this.keysData.reduce((acc, i) => acc.concat(i));
    this.keys.forEach((key) => {
        const keyEl = key;
        if (keyEl.childElementCount === 0) {
        const index = arrKeys.findIndex(item => item.code === key.dataset.key);
        keyEl.textContent = this.isRu ? arrKeys[index].ru : arrKeys[index].en;
        }
    });
    }
}

const keyboard = new Keyboard (keysData);
keyboard.init();

