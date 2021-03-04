var _targettedModal,
    _triggers = document.querySelectorAll('[data-modal-trigger]'),
    _dismiss = document.querySelectorAll('[data-modal-dismiss]'),
    modalActiveClass = "is-modal-active";

function showModal(el){
    _targettedModal = document.querySelector('[data-modal-name="'+ el + '"]');
    _targettedModal.classList.add(modalActiveClass);
}

function hideModal(event){
    if(event === undefined || event.target.hasAttribute('data-modal-dismiss')) {
        _targettedModal.classList.remove(modalActiveClass);
    }
}

function bindEvents(el, callback){
    for (i = 0; i < el.length; i++) {
        (function(i) {
            el[i].addEventListener('click', function(event) {
                callback(this, event);
            });
        })(i);
    }   
}

function triggerModal(){
    bindEvents(_triggers, function(that){
        showModal(that.dataset.modalTrigger);
    });
}

function dismissModal(){
    bindEvents(_dismiss, function(that){
        hideModal(event);
    });
}

function initModal(){
    triggerModal();
    dismissModal();
}

initModal();


// Anim navbar

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 30) {
        nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }

})