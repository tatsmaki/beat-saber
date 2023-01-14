export class AudioController {
  private audioContext: AudioContext | null = null;
  private gainNode: GainNode | null = null;
  private sourceNode: AudioBufferSourceNode | null = null;
  private analyserNode: AnalyserNode | null = null;
  private analyzerUint8: Uint8Array | null = null;

  handleClick() {
    this.audioContext = new AudioContext();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.connect(this.audioContext.destination);
    this.gainNode.gain.value = 0.5;
    this.sourceNode = new AudioBufferSourceNode(this.audioContext, {
      playbackRate: 1,
      loop: true,
    });
    this.sourceNode.connect(this.gainNode);
    this.analyserNode = new AnalyserNode(this.audioContext, {
      fftSize: 2 ** 8,
      smoothingTimeConstant: 1,
    });
    this.analyzerUint8 = new Uint8Array(this.analyserNode.frequencyBinCount);
    this.sourceNode.connect(this.analyserNode);
    this.play();
  }

  getFrequency() {
    this.analyserNode!.getByteTimeDomainData(this.analyzerUint8!);
    return this.analyzerUint8!;
  }

  async play() {
    const response = await fetch("audio/falloutboy_centuries.mp3");
    const buffer = await response.arrayBuffer();
    const data = await this.audioContext!.decodeAudioData(buffer);
    if (this.sourceNode) {
      this.sourceNode.buffer = data;
      this.sourceNode.start();
    }
  }

  stop() {
    this.sourceNode!.stop();
  }
}
