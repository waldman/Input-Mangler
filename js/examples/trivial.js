// trivial mangler that emits all events back without modification and prints the events to stdout.

include('js/keysyms.js');
include('js/keynames.js');

function process(ev) {
	if (ev.type == EV_KEY) {
		log('EVENT: '+ ev.code+ ' '+sym(ev.code) +' '+ ev.value);
	}
	emit(ev.type, ev.code, ev.value);
}

