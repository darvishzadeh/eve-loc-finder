import React from 'react'

export default function LocationFinder() {
    return (
        <div>
            <h1>Form Input</h1>
            To utilise:<br />
            <code>api.HERE_findLatLngByPlaceName</code> and get results by<br />
            <code>Response.View.Result.Location.DisplayPosition.Latitude</code> and <code>.Longitude</code> or<br />
            <code>Response.View.Result.Location.NavigationPosition.Latitude</code> and <code>.Longitude</code>
            <h1>Results List</h1>
            <h1>Map</h1>
        </div>
    )
}
