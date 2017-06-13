<template>
  <div style="z-index: 100;"></div>
</template>

<script>
import debounce from 'lodash.debounce'
import loadGoogleMapsAPI from 'load-google-maps-api'

export default {
  props: {
    directionsLink: String,
    draggable: Boolean,
    icon: String,
    latLngLiteral: Object,
    placeId: String,
    title: String,
    zoom: Number
  },

  data () {
    return {
      defaultZoom: 15,
      googleMapsAPIKey: process.env.googleMapsAPIKey
    }
  },

  mounted () {
    Promise.resolve(window.google).then(google => {
      return google ? google.maps : loadGoogleMapsAPI({
        libraries: ['places'],
        key: this.googleMapsAPIKey
      })
    }).then(maps => {
      this.maps = maps
      const mapOpts = {
        draggable: this.draggable === true,
        scrollwheel: false,
        zoom: this.zoom || this.defaultZoom
      }

      if (this.latLngLiteral) {
        this.latLng = new maps.LatLng(this.latLngLiteral)

        Object.assign(mapOpts, {
          center: this.latLng
        })
      }

      this.map = new maps.Map(this.$el, mapOpts)
      this.infoWindow = new maps.InfoWindow()
      this.placesService = new maps.places.PlacesService(this.map)

      if (this.placeId) {
        return new Promise((resolve, reject) => {
          this.placesService.getDetails({
            placeId: this.placeId
          }, (place, status) => {
            if (status !== maps.places.PlacesServiceStatus.OK) {
              reject(new Error(`Places service failed with status ${status}`))
            } else {
              resolve(place)
            }
          })
        })
      }
    }).then(place => {
      this.place = place
      const markerOpts = {
        map: this.map
      }

      if (this.icon) markerOpts.icon = this.icon
      if (this.title) markerOpts.title = this.title
      if (place) {
        markerOpts.position = place.geometry.location
      } else if (this.latLng) {
        markerOpts.position = this.latLng
      }

      // Only create the marker if we have a position
      if (!markerOpts.position) return

      this.marker = new this.maps.Marker(markerOpts)

      // Ensure the marker is visible
      this.panToMarker()

      // Adjust the map after the center position changes
      this.centerChangedListener = debounce(this.panToMarker, 2000)

      this.map.addListener('center_changed', this.centerChangedListener)
      this.marker.addListener('click', this.selectMarker)
    }).catch(err => {
      console.error(err)
    })
  },

  beforeDestroy () {
    this.centerChangedListener.cancel()

    if (this.maps) this.maps.event.clearInstanceListeners(window)
    if (this.maps) this.maps.event.clearInstanceListeners(this.maps)
    if (this.maps && this.map) this.maps.event.clearInstanceListeners(this.map)
    if (this.maps && this.marker) this.maps.event.clearInstanceListeners(this.marker)

    this.infoWindow = this.latLng = this.maps = this.map = this.marker = this.place = this.placesService = null
  },

  methods: {
    panToMarker () {
      if (this.map && this.marker) this.map.panTo(this.marker.getPosition())
    },
    selectMarker () {
      if (!this.marker) return

      const content = []

      if (this.title) content.push(`<h6>${this.title}</h6>`)
      if (this.directionsLink) content.push(`<a href="${this.directionsLink}" target="_blank">Directions</a>`)

      if (content.length > 0) {
        this.infoWindow.setContent(content.join(''))
        this.infoWindow.open(this.map, this.marker)
      }
    }
  }
}
</script>
