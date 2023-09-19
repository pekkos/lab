							
const myDialog = document.getElementById('my_dialog');
const myOtherDialog = document.getElementById('my_other_dialog');

const showDialog = function ( el ) {
	// el.showModal();
    el.showModal();
	el.focus();
}
const closeDialog = function ( el ) {
	el.close();
}