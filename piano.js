const keyNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const blackSheepNotes = ['E4', 'D4', 'C4', 'D4', 'E4', 'E4', 'E4', 'D4', 'D4', 'D4', 'E4', 'G4', 'G4', 'E4', 'D4', 'C4', 'D4', 'E4', 'E4', 'E4', 'E4', 'D4', 'D4', 'E4', 'D4', 'C4'];

const noteDelays = [0, 500, 1000, 1500, 2000, 2500, 3000, 4000, 4500, 5000, 6000, 6500, 7000, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500, 13000, 13500, 14000];

function playNoteWithDelay(note, delay) {
  setTimeout(() => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, '8n');
  }, delay);
}

function renderKeys() {
  const piano = document.querySelector('.piano');

  keyNames.forEach((key, index) => {
    const keyDiv = document.createElement('div');
    keyDiv.className = 'key';
    keyDiv.dataset.note = blackSheepNotes[index];
    keyDiv.textContent = key;
    keyDiv.addEventListener('click', () => playNoteWithDelay(blackSheepNotes[index], 0));
    piano.appendChild(keyDiv);
  });
}

function playBlackSheepWithDelays() {
  blackSheepNotes.forEach((note, index) => {
    playNoteWithDelay(note, noteDelays[index]);
  });
}

renderKeys();
