interface RecordingItems {
  name: string
  topic: string[]
  url: string
}

const recordings: RecordingItems[] = [
  {
    name: '2020 ES-SSA talk (also the AGU 2020 video recording)',
    topic: ['Seismology', 'Full waveform inversion', 'Subduction Zone'],
    url: 'https://www.youtube.com/embed/KFAvghTmiUc',
  },
]

const topics = ['Seismology', 'Full waveform inversion', 'Optimization', 'Subduction Zone']

export { recordings, topics }
export type { RecordingItems }
