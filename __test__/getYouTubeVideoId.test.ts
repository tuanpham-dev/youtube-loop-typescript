import getYouTubeVideoId from '../src/utils/getYouTubeVideoId'

const urls = [
  'nfWlot6h_JM',
  'https://www.youtube.com/watch?v=nfWlot6h_JM',
  'https://www.youtube.com/embed/nfWlot6h_JM',
  'https://youtu.be/nfWlot6h_JM'
]
test('getYouTubeVideoId function', () => {
  urls.forEach(url => {
    expect(getYouTubeVideoId(url)).toBe('nfWlot6h_JM')
  })
})