/*
Wordle import/export
By James Martin (@ymhr)

Pretty simple - it copies the stats out of local storage, then the user is responsible to getting it
from one device to the other, then it provides a method to paste and import it.
*/

const statsKey = 'nyt-wordle-statistics';

function createModal() {
	const modal = document.createElement('div');
	modal.style.background = '#fff';
	modal.style.padding = "10px";
	modal.style.position = 'relative';

	const copyButton = document.createElement('button');
	copyButton.innerText = "Copy stats to clipboard";
	copyButton.onclick = copyStatsToClipboard.bind(null, modal);

	const importButton = document.createElement('button');
	importButton.innerText = "Import";
	importButton.onclick = replaceStatsInLocalStorage;

	modal.innerHTML = "<h1>Import/export stats</h1><div>Click the 'copy to clipboard' button below to copy your stats. Paste them somewhere safe. Then, on your new device, copy that text to your clipboard and click 'import from clipboard'.<br><br>This will OVERWRITE the stats currently on the device and replace it with the ones you previously exported, so please <strong> USE WITH CAUTION</strong>.</div>";

	modal.append(copyButton, importButton);

	const closeButton = document.createElement('div');
	closeButton.onclick = () => window.location.reload();
	modal.prepend(closeButton);
	closeButton.innerHTML = '<strong>X</strong>';
	closeButton.style.cssText = 'position:absolute;top:0;right:0;cursor:pointer;padding:5px';
	return modal;
}

/**
 * 
 * @param {HTMLDivElement} modal 
 */
function copyStatsToClipboard(modal) {
	const statsData = localStorage.getItem(statsKey);

	if (!statsKey) {
		alert('No stats found!');
	}

	const hiddenInput = document.createElement('input');
	hiddenInput.value = statsData;

	hiddenInput.style.opacity = 0;

	modal.append(hiddenInput);
	hiddenInput.select();
	document.execCommand('copy');
	alert('Copied! Now put it somewhere safe');
}

function replaceStatsInLocalStorage() {
	let message = "Paste your stats here to replace them on this device.";
	if (localStorage.getItem(statsKey)) {
		message = "There are already stats on this device. Are you sure you wish to replace them? This cannot be undone.";
	}
	const stats = prompt(message);
	if (stats) {
		try {
			//Parsing here to make sure these stats are valid JSON
			JSON.parse(stats);
			localStorage.setItem(statsKey, stats);
			alert('Stats successfully imported. Have fun!')
			window.location.reload();
		} catch (e) {
			alert("These stats are invalid!");
		}
	} else {
		alert("Aborted. Nothing has been changed.");
	}
}

(() => {
	const container = document.createElement('div');
	container.style.cssText = 'display:flex;position:absolute;top:0;right:0;left:0;bottom:0;justify-content:center;align-items:center;background:rgba(0,0,0,0.7)';

	const modal = createModal();

	container.append(modal);

	document.body.after(container);
})()