import { Video } from "../../src/store/types";

interface MockData {
  youtubeId: string,
  playingVideo: number,
  video: Video,
  videos: Video[]
}

export const mockData: MockData = {
  youtubeId: 'nfWlot6h_JM',
  playingVideo: 1,
  video: {
    id: 1,
    youtubeId: 'nfWlot6h_JM',
    volume: 50,
    range: [0, 230]
  },
  videos: [
    {
      id: 1,
      youtubeId: 'nfWlot6h_JM',
      volume: 100,
      range: [
        0,
        242
      ]
    },
    {
      id: 2,
      youtubeId: '3tmd-ClpJxA',
      volume: 100,
      range: [
        0,
        256
      ]
    },
    {
      id: 3,
      youtubeId: 'e-ORhEE9VVg',
      volume: 100,
      range: [
        0,
        273
      ]
    },
    {
      id: 4,
      youtubeId: 'QcIy9NiNbmo',
      volume: 100,
      range: [
        0,
        245
      ]
    }
  ]
}

export default mockData