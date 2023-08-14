import { Coordinates } from "@/models/Coordinates";
import styles from "./Cell.module.scss";

interface CellProps {
    highlight?: boolean;
    check?: boolean;
    validMove?: boolean;
    validCapture?: boolean;
    coordinates: Coordinates;
}

export default function Cell(props: CellProps) {

    const className = [
        styles["cell"],
        props.highlight ? styles["highlight"] : "",
        props.check ? styles["check"] : "",
        props.validMove ? styles["valid-move"] : "",
        props.validCapture ? styles["valid-capture"] : "",
    ].join(" ");

    const style = {
        transform: `translate(${props.coordinates.x * 100}%, ${(7 - props.coordinates.y) * 100}%)`,
    };

    return (
        <div className={className} style={style}></div>  
    );
}

