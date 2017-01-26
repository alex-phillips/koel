require('chai').should()
import { cloneDeep, last } from 'lodash'

<<<<<<< HEAD
import { albumStore, artistStore } from '../../stores'
import data from '../blobs/data'

const { artists, albums } = data

describe('stores/album', () => {
  beforeEach(() => {
    artistStore.init(cloneDeep(artists))
    albumStore.init(cloneDeep(albums))
  })

  afterEach(() => {
    artistStore.state.artists = []
    albumStore.state.albums = []
  })
=======
import { albumStore, artistStore, genreStore } from '../../stores'
import { default as artists, singleAlbum, singleSong, genres } from '../blobs/media'

describe('stores/album', () => {
  beforeEach(() => { genreStore.init(cloneDeep(genres)); albumStore.init(cloneDeep(artists)) })

  afterEach(() => { genreStore.state.genres = []; albumStore.state.albums = [] })
>>>>>>> more changes cleanup - removed folders references

  describe('#init', () => {
    it('correctly gathers albums', () => {
      albumStore.state.albums.length.should.equal(7)
    })

    it('correctly sets album artists', () => {
      albumStore.state.albums[0].artist.id.should.equal(3)
    })
  })

  describe('#byId', () => {
    it('correctly gets an album by ID', () => {
      albumStore.byId(1193).name.should.equal('All-4-One')
    })
  })

  describe('#compact', () => {
    it('correctly compacts albums', () => {
      albumStore.compact()
      albumStore.state.albums.length.should.equal(0)
    })
  })

  describe('#all', () => {
    it('correctly returns all albums', () => {
      albumStore.all.length.should.equal(7)
    })
  })
})
