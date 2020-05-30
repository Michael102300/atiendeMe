import React ,{Component}from 'react'
import mapboxgl, { Marker } from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Via2lsbGVyMDQyMSIsImEiOiJjanppdmd3cjEwM2pzM2NwcDl5eDhybjkzIn0.gnjw9ThqB1MPnxSYeMXojg'

class MapCases extends Component{

    constructor(){
        super()
        this.state = {
            lng : -74.084072,
            lat : 4.615096,
            zoom : 15
        }
    }

    componentDidMount(){
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
            });
            
            const marker = new mapboxgl.Marker()
                               .setLngLat([this.state.lng,this.state.lat])
                               .addTo(map)
            

            map.on('move',()=>{
                this.setState({
                    lng: map.getCenter().lng.toFixed(4),
                    lat: map.getCenter().lat.toFixed(4)
                })
                
                marker.remove()
                marker.setLngLat([this.state.lng,this.state.lat]).addTo(map)
                
            })

            
            
            
    }

    render(){
        return(
            <div style={{paddingLeft: "8%"}}>
                <div className="sliderStyle">
                    <h6>Localidades con más afectados</h6>
                    <div ref={el => this.mapContainer = el} style={{
                            width:"95%",
                            height:500
                            }}/>
                        
                    </div>
            </div>
        )
    }    
}

export default MapCases