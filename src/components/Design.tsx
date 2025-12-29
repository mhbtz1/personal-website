import { Link } from 'react-router-dom';

interface Design {
    designName: string;
    designDescription: string;
    designLink?: string;
}


export default function Design() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const designs: Design[] = [
        {
        designName: 'Cafe UI',
        designDescription: 'Nice, minimalist replication of a nice user interface for a modern cafe.',
    }]
}