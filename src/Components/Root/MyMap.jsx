import { Map, Marker } from "pigeon-maps"

const MyMap = () => {
    return (
        <Map height={300} defaultCenter={[23.766179547989704, 90.36204507019411]} defaultZoom={11}>
            <Marker width={50} anchor={[23.766179547989704, 90.36204507019411]} />
        </Map>
    );
};

export default MyMap;